import {
  type FC,
  type AnchorHTMLAttributes,
  type ReactNode,
  type ElementType,
  createElement,
} from 'react';

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
interface ReactRouterLikeLinkProps {
  to: string;
  replace?: boolean;
  state?: unknown;
  preventScrollReset?: boolean;
  relative?: 'route' | 'path';
  end?: boolean; // Common in NavLink
  caseSensitive?: boolean; // Common in NavLink
}

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
export interface SmartLinkProps
  extends Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    'href' | 'target' | 'rel' // `href` is mandatory and redefined; `target` and `rel` are handled specially
  > {
  href: string;
  children: ReactNode;
  isExternal?: boolean;
  linkAs?: ElementType;

  // Props often used by router link components, passed through if linkAs is provided
  replace?: boolean;
  state?: unknown;
  preventScrollReset?: boolean;
  relative?: 'route' | 'path';
  end?: boolean;
  caseSensitive?: boolean;

  // Allow overriding target and rel, with special handling by SmartLink
  target?: string;
  rel?: string;
}

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
export const SmartLink: FC<SmartLinkProps> = ({
  href,
  children,
  isExternal: isExternalProp,
  linkAs: LinkComponent,
  // Router-specific props (also passed to LinkComponent if provided)
  replace,
  state,
  preventScrollReset,
  relative,
  end,
  caseSensitive,
  // Standard anchor props we handle specially or pass through
  target: targetProp,
  rel: relProp,
  ...rest // Other props like className, id, aria-*, data-*, etc.
}) => {
  const isExplicitlyExternal = isExternalProp === true;
  const isImplicitlyExternal =
    isExternalProp === undefined &&
    (href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('//') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:'));

  const isActualExternal = isExplicitlyExternal || isImplicitlyExternal;

  if (isActualExternal) {
    const finalTarget = targetProp ?? '_blank'; // Default to _blank for external links
    let currentRel = relProp ?? '';

    // Ensure noopener noreferrer for security if target is _blank
    if (finalTarget === '_blank') {
      if (!currentRel.includes('noopener')) {
        currentRel = `${currentRel} noopener`.trim();
      }
      if (!currentRel.includes('noreferrer')) {
        currentRel = `${currentRel} noreferrer`.trim();
      }
    }

    return (
      <a
        href={href}
        target={finalTarget}
        rel={currentRel || undefined} // Pass undefined if rel is empty string to avoid rel=""
        {...rest}
      >
        {children}
      </a>
    );
  }

  // Internal link handling
  if (LinkComponent) {
    // Props intended for the LinkComponent
    const linkImplProps: Record<string, unknown> & { to: string } = {
      ...rest, // Spread unrecognized props first
      to: href, // `to` (from SmartLink's href) takes precedence over a 'to' in `rest`
    };

    // Conditionally add router-specific props if they are defined on SmartLink
    if (replace !== undefined) linkImplProps.replace = replace;
    if (state !== undefined) linkImplProps.state = state;
    if (preventScrollReset !== undefined) linkImplProps.preventScrollReset = preventScrollReset;
    if (relative !== undefined) linkImplProps.relative = relative;
    if (end !== undefined) linkImplProps.end = end;
    if (caseSensitive !== undefined) linkImplProps.caseSensitive = caseSensitive;

    // Pass through target and rel if they are explicitly set on SmartLink
    if (targetProp !== undefined) linkImplProps.target = targetProp;
    if (relProp !== undefined) linkImplProps.rel = relProp;

    return createElement(LinkComponent, linkImplProps, children);
  }

  // Fallback for internal links: standard <a> tag
  // Respect targetProp and relProp if provided
  return (
    <a href={href} target={targetProp} rel={relProp} {...rest}>
      {children}
    </a>
  );
};

export default SmartLink; 