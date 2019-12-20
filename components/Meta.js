import Head from "next/head";


const Meta = () => {
  return (<React.Fragment>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="description" content="Tailor es un boutique digital con base en Madrid. Utilizamos el diseño estratégico y la desarrollo multiplataforma para crear estrategias de marca diferentes"/>
    <link rel="apple-touch-icon" sizes="57x57" href="./static/img/favicon/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="./static/img/favicon/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="./static/img/favicon/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="./static/img/favicon/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="./static/img/favicon/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="./static/img/favicon/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="./static/img/favicon/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="./static/img/favicon/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="./static/img/favicon/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192"  href="./static/img/favicon/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="./static/img/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="./static/img/favicon/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="./static/img/favicon/favicon-16x16.png"/>
    
    <title>Tailor</title>
    </Head>
        <style jsx global>{`
        html, body {
            max-width: 100%;
            overflow-x: hidden;
            background-color: #eaf4ec;
            
          }
        body { padding:0; margin:0;}
        h1, h2, p, h3{   
            margin-top: 0;
            margin-bottom: 0;
        }
        @font-face {
            font-family: "Grabenbach-regular";
            src: url(/static/fonts/Grabenbach-regular.ttf) format("truetype");
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: "Grabenbach";
            src: url(/static/fonts/Grabenbach.ttf) format("truetype");
            font-weight: normal;
            font-style: normal;
        }
        * {
            box-sizing:border-box;
        }
    `}</style>
    </React.Fragment>);
  
}

export default Meta;