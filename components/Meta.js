


import Head from "next/head";

const Meta = () => {
  return (
    <React.Fragment>
      <Head>
        <meta name="description" content=" Simón González Negrete. Director de Arte, UX/UI y Desarrollador Web. "/>  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        <title>Simon G. Negrete</title>
      </Head>
      <style jsx global>{`
        @font-face {

        }
        @font-face {
  
        }
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          max-width: 100%;
        }

        html, body {
          overflow-x:hidden;
        }
        h1, h2, h3, p {
          margin-top: 0;
          margin-bottom: 0;
        }

      `}</style>
    </React.Fragment>
  );
};

export default Meta;
