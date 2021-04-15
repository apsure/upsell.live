import React from 'react';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';

export default function Layout(props) {
  const {children, noFooter, wrapperClassName} = props;

  return (
    <>
      <LayoutProviders>
        <LayoutHead {...props} />

        <SkipToContent />

        <AnnouncementBar />

        <Navbar />

        <main className={clsx('main-wrapper', wrapperClassName)}>{children}</main>

        {!noFooter && <Footer />}
      </LayoutProviders>
    </>
  )
}
