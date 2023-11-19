
            
import Head from 'next/head'
import 'react-quill/dist/quill.snow.css';

export default function postBlog(props:any){
                                
    return(
    
        <>
            <Head>
                <title>how</title>
                <meta name="description" content="crypto dorea description must be here" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/doreaLogo.ico" />
            </Head>
            <div dangerouslySetInnerHTML={{__html: `<div class="ql-container ql-snow"><div class="ql-editor" data-gramm="false" contenteditable="true" data-placeholder="Compose an epic..."><p>first blog</p><p><br></p><pre class="ql-syntax" spellcheck="false">npm i dvote-plygon
</pre><p><br></p><p><br></p><p>the end!!!!!</p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div></div>` }} />
            
        </>
    )
                    
}
    
export async function getServerSideProps(context:any) {
    
// console.log(context.req.cookies['user'])
                
    return {
        props:{}
    }
                    
}
