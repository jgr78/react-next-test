import App, { Container } from 'next/app'
import React from 'react'
import { PageTransition } from 'next-page-transitions'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <PageTransition timeout={500} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
		<style jsx global>{`

        `}</style>
      </Container>
    )
  }
}


/*
				  .page-transition-enter-active  #overlay_layer {
					animation: overlay-layer-magic 0.3s;
					animation-timing-function: ease-in-out;
					animation-fill-mode: forwards;
					animation-fill-direction: forwards;
				  }
		          .page-transition-enter {
					opacity: 0;
				  }
				  .page-transition-enter-active {
					opacity: 1;
				  }
				  .page-transition-exit {
					opacity: 1;
					transform: scale(1);
				  }
				  .page-transition-exit-active #overlay_layer {
					opacity: 0;
					animation: overlay-layer-magic-reverse 0.3s;
					animation-timing-function: ease-in-out;
					animation-fill-mode: forwards;
					animation-fill-direction: forwards;
				  }
*/
/*

          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 3000ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
		  }
		  */