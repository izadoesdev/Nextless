import {
  type FC,
  type AnchorHTMLAttributes,
  type ReactNode,
  type ElementType,
  createElement,
} from 'react';
import { isExternalUrl } from '../../utils/url';

/**
 * @interface ReactRouterLikeLinkProps
 * @description
 * Represents a subset of common properties found in Link components from popular
 * React routing libraries like React Router. This interface is used for documentation
 * and to guide the props of `SmartLink` when a custom `linkAs` component is provided.
 * It does not create a hard dependency on any specific routing library.
 * Consumers using a routing library should ensure their `linkAs` component
 * receives the appropriate props.
 *
 * @property {string} to - Typically, the path or URL the link points to (often mapped from `SmartLinkProps.href`).
 * @property {boolean} [replace] - If true, navigating to the link will replace the current entry in the history stack instead of adding a new one.
 * @property {unknown} [state] - State to be associated with the new location.
 * @property {boolean} [preventScrollReset] - (React Router specific) If true, the scroll position will not be reset to the top of the page upon navigation.
 * @property {'route' | 'path'} [relative] - (React Router specific) Defines how relative paths are resolved.
 * @property {boolean} [end] - (React Router NavLink specific) If true, the link will only be active if the current URL exactly matches the `to` prop.
 * @property {boolean} [caseSensitive] - (React Router NavLink specific) If true, matching of the `to` prop against the current URL will be case-sensitive.
 */

// interface ReactRouterLikeLinkProps {
//   to: string;
//   replace?: boolean;
//   state?: unknown;
//   preventScrollReset?: boolean;
//   relative?: 'route' | 'path';
//   end?: boolean; // Common in NavLink
//   caseSensitive?: boolean; // Common in NavLink
// }

/**
 * Available types of relative path resolution
 */
export enum RelativeType {
  ROUTE = 'route',
  PATH = 'path',
}

/**
 * Common router props that SmartLink handles and passes to the underlying component
 */
export type RouterProps = {
  replace?: boolean;
  state?: unknown;
  preventScrollReset?: boolean;
  relative?: RelativeType;
  end?: boolean;
  caseSensitive?: boolean;
};

/**
 * @interface SmartLinkProps
 * @extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>
 * @description Props for the `SmartLink` component.
 *
 * @property {string} href - The URL or path for the link. This is a mandatory prop.
 *                          If `linkAs` is provided for an internal link, `href` is typically
 *                          mapped to a `to` prop for the underlying router component.
 * @property {React.ReactNode} children - The content to be rendered inside the link. Mandatory.
 * @property {boolean} [isExternal] - Explicitly mark the link as external. If not provided,
 *                                   this is auto-detected based on the `href` content (e.g., "http:", "mailto:").
 *                                   External links automatically get `target="_blank"` and `rel="noopener noreferrer"`.
 * @property {React.ElementType} [linkAs] - An optional component type (e.g., `Link` from `react-router-dom`)
 *                                        to be used for rendering internal links. If provided, `SmartLink`
 *                                        will delegate rendering to this component, passing relevant props.
 *                                        If not provided, internal links render as standard `<a>` tags.
 * @property {boolean} [replace] - If using a `linkAs` component that supports it (like React Router's Link),
 *                                this hints to replace the current entry in the history stack.
 * @property {unknown} [state] - If using a `linkAs` component that supports it, this allows passing state
 *                              to the new location.
 * @property {boolean} [preventScrollReset] - (Common in React Router) If using a `linkAs` component that supports it,
 *                                         this hints to prevent scroll reset on navigation.
 * @property {'route' | 'path'} [relative] - (Common in React Router) If using a `linkAs` component that supports it,
 *                                         this defines how relative paths are resolved.
 * @property {boolean} [end] - (Common in React Router's NavLink) If using a `linkAs` component that supports it,
 *                            this hints that the link should only be considered active if the URL path is an exact match.
 * @property {boolean} [caseSensitive] - (Common in React Router's NavLink) If using a `linkAs` component that supports it,
 *                                      this hints that path matching should be case-sensitive for determining active state.
 * @property {string} [target] - Standard HTML `target` attribute. For external links, this defaults to `_blank`.
 *                               If `isExternal` is false (or auto-detected as internal) and no `linkAs` is provided,
 *                               this `target` prop will be applied to the native `<a>` tag.
 *                               If `linkAs` is provided, this `target` prop is passed to the `linkAs` component.
 * @property {string} [rel] - Standard HTML `rel` attribute. For external links, `noopener noreferrer` is automatically added
 *                           to any existing `rel` values. For internal links (native `<a>` or via `linkAs`),
 *                           this `rel` prop is passed through.
 */
export type SmartLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'target' | 'rel'
> & 
  RouterProps & {
    /** URL or path for the link */
    href: string;
    
    /** Link content */
    children: ReactNode;
    
    /** Explicitly mark as external (auto-detected if undefined) */
    isExternal?: boolean;
    
    /** Component to use for internal links (e.g., router Link) */
    linkAs?: ElementType;
    
    /** Target attribute (defaults to _blank for external links) */
    target?: string;
    
    /** Rel attribute (noopener noreferrer added for _blank) */
    rel?: string;
  };

/**
 * @component SmartLink
 * @description
 * A versatile and framework-agnostic link component designed for React applications.
 * It intelligently handles navigation for both external and internal links and can
 * seamlessly integrate with client-side routing libraries like React Router.
 *
 * Features:
 * - **Automatic External Link Handling**: Links starting with "http", "https", "//", "mailto:", or "tel:"
 *   are treated as external by default. They automatically open in a new tab (`target="_blank"`)
 *   and include `rel="noopener noreferrer"` for security. This behavior can be customized
 *   using the `target` and `rel` props.
 * - **Router Integration**: For internal links, you can provide a custom link component
 *   (e.g., `Link` from `react-router-dom`) via the `linkAs` prop. `SmartLink` will then
 *   render using that component, mapping its `href` prop to the router component's `to` prop
 *   and passing through other relevant routing props (`replace`, `state`, etc.), as well as
 *   any `target` or `rel` props specified on `SmartLink`.
 * - **Standard Anchor Fallback**: If `linkAs` is not provided for an internal link,
 *   it defaults to a standard `<a>` tag, respecting any `target` or `rel` props.
 * - **Prop Forwarding**: Unrecognized props (via `...rest`) are passed down to the
 *   underlying `<a>` tag or the `linkAs` component, allowing for full customization
 *   (e.g., `className`, `id`, ARIA attributes).
 *
 * @example
 * ```tsx
 * // External link
 * <SmartLink href="https://example.com">Visit Example</SmartLink>
 *
 * // External link opening in the same tab (custom target)
 * <SmartLink href="https://othersite.com" target="_self">Visit Other Site (same tab)</SmartLink>
 *
 * // Internal link (plain anchor)
 * <SmartLink href="/about">About Us</SmartLink>
 *
 * // Internal link (plain anchor) with target
 * <SmartLink href="/terms" target="_blank">Terms (new tab)</SmartLink>
 *
 * // Internal link with React Router
 * import { Link as ReactRouterLink } from 'react-router-dom';
 * <SmartLink href="/profile" linkAs={ReactRouterLink}>My Profile</SmartLink>
 *
 * // With additional router props
 * <SmartLink href="/home" linkAs={ReactRouterLink} replace>Home (replace)</SmartLink>
 * ```
 */
export function SmartLink({
  // Basic props
  href,
  children,
  isExternal: isExternalProp,
  linkAs: LinkComponent,
  
  // Router props
  replace,
  state,
  preventScrollReset,
  relative,
  end,
  caseSensitive,
  
  // HTML anchor props
  target: targetProp,
  rel: relProp,
  
  // All other props
  ...rest
}: SmartLinkProps) {
  // Determine if link is external
  const isActualExternal = 
    isExternalProp ?? isExternalUrl(href);

  // External link handling
  if (isActualExternal) {
    const finalTarget = targetProp ?? '_blank';
    let finalRel = relProp ?? '';

    // Add security attributes for _blank targets
    if (finalTarget === '_blank') {
      const relParts = new Set(finalRel.split(' ').filter(Boolean));
      relParts.add('noopener');
      relParts.add('noreferrer');
      finalRel = Array.from(relParts).join(' ');
    }

    return (
      <a
        href={href}
        target={finalTarget}
        rel={finalRel || undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Router component integration
  if (LinkComponent) {
    const routerProps: Record<string, unknown> = { to: href, ...rest };
    
    // Add router-specific props if defined
    if (replace !== undefined) routerProps.replace = replace;
    if (state !== undefined) routerProps.state = state;
    if (preventScrollReset !== undefined) routerProps.preventScrollReset = preventScrollReset;
    if (relative !== undefined) routerProps.relative = relative;
    if (end !== undefined) routerProps.end = end;
    if (caseSensitive !== undefined) routerProps.caseSensitive = caseSensitive;
    
    // Pass through anchor attributes
    if (targetProp !== undefined) routerProps.target = targetProp;
    if (relProp !== undefined) routerProps.rel = relProp;

    return createElement(LinkComponent, routerProps, children);
  }

  // Default: standard anchor tag
  return (
    <a 
      href={href} 
      target={targetProp} 
      rel={relProp} 
      {...rest}
    >
      {children}
    </a>
  );
}

export default SmartLink;
