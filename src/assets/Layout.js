import Head from 'next/head'


const Layout = (props) => (
	<div>
        <Head>
        


        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link  rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link  rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="manifest" href="/site.webmanifest"/>
       
        </Head>
     
        {props.children}
   
    
    <script src="js/jquery.min.js"></script>
    <script src="js/default/dark-mode-switch.js"></script>
   
    <script src="js/default/active.js"></script>
    <script src="js/default/clipboard.js"></script> 
    
    </div>
);

export default Layout