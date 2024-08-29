import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

const features = [
  {
    icon: "fas fa-user",
    title: "Easy to Use",
    imageUrl: "screenshots/create-upsell-product-chosen.png",
    quote:
      "I love that I can easily create and remove upsells to go along with our current promotions!",
    quoteAuthor: "Ruthi Lydos",
    description: (
      <>
        Upsell Live was designed from the ground up to let you showcase
        additional products from the shopping cart as easily as possible.
      </>
    ),
  },
  {
    icon: "fas fa-chart-line",
    title: "Generate Additional Sales",
    imageUrl: "screenshots/modal-upsells.png",
    quote:
      "Our customers really love the last minute chance to pickup and item may have forgotten.",
    quoteAuthor: "Malandra Ambrósio",
    description: (
      <>
        It's like the candy display at the grocery store -- it gives your
        customers additional items to consider before checking out.
      </>
    ),
  },
  {
    icon: "far fa-smile-beam",
    title: "Features Galore",
    imageUrl: "screenshots/inline-upsells.png",
    quote:
      "You can customize so it shows directly in your cart, no intrusive popups!",
    quoteAuthor: "Doreen Suniti",
    description: (
      <>
        Upsells are customizable to match your site and highlight exactly the
        products you want.
      </>
    ),
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for Upsell Live, a Shopify app for upselling additional products before checkout"
    >
      <div className="relative mt-12">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={useBaseUrl("img/iStock-1133980246.jpg")}
                alt="Boxes on top of Laptop"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700"
                style={{ mixBlendMode: "multiply" }}
              ></div>
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Increase your sales on</span>
                <span className="block text-indigo-200">Shopify</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Use our Shopify app to encourage additional purchases before
                your customers checkout.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                  <a
                    href="/docs"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      {features && features.length > 0 && (
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          ></div>
          {features.map((feature, idx) => (
            <div key={idx} className={idx == 0 ? "relative" : "mt-24"}>
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div
                  className={
                    "px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 " +
                    (idx % 2 == 0 ? "lg:py-16" : "lg:py-32 lg:col-start-2")
                  }
                >
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                        <i className={feature.icon}></i>
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {feature.title}
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                        {feature.description}
                      </p>
                      <div className="mt-6">
                        <a
                          href="/docs"
                          className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        >
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          &ldquo;{feature.quote}&rdquo;
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-6 w-6 rounded-full"
                              src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                              alt=""
                            />
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            {feature.quoteAuthor}
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                    <img
                      className={
                        "w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none " +
                        (idx % 2 == 0 ? "lg:left-0" : "lg:right-0")
                      }
                      src={feature.imageUrl}
                      alt="Inbox user interface"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}

export default Home;
