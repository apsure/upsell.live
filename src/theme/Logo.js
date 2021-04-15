import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';

export default function Logo(props) {
  const {isClient} = useDocusaurusContext();
  const {
    navbar: {title, logo = {src: ''}},
  } = useThemeConfig();

  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo.href || '/');
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  return (
    <Link
      to={logoLink}
      {...propsRest}
      {...(logo.target && {target: logo.target})}>
      {logo.src && (
        <ThemedImage
          key={isClient}
          className={imageClassName}
          sources={sources}
          alt={logo.alt || title || 'Logo'}
        />
      )}
      {title != null && <span className="sr-only">{title}</span>}
    </Link>
  );
}
