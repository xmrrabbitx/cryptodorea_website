import styles from "@/styles/landing/Home.module.css";
import {toast} from "react-toastify";
import {useState} from "react";

export default function Test() {


    const smartContract = {
        language: 'Solidity',
        sources: {
            'test.sol': {
                content: 'contract C { function f() public { } }'
            }
        },
        settings: {
            outputSelection: {
                '*': {
                    '*': ['*']
                }
            }
        }
    };

    //const [smartContract, setSmartContract] = useState("");



    const testSubmit = async (event:any) => {
        event.preventDefault();

            const response = await fetch("/api/smartContract/compile",{

                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({smartContract}),

            });

            const resp = await response.json();

            // error and response of email
            if(resp.error){
                toast.error(resp.error);
            }else{
                toast.success(resp.success);
            }


    }

    return (<>
        test page
        <form onSubmit={testSubmit}>
            <button id={styles.joinButtonAnchore}
                    className="w-30 p-4 xl:ml-0 lg:mr-3 md:mr-3 sm:mr-3 mr-3 pt-2.5 pb-2.5 text-center mt-5 xl:text-md/[19px]  text-sm/[17px]">
                compile
            </button>
            <input
                onChange={(event) => setSmartContract(event.target.value)}
                type='text'
                placeholder='your email address...'
                className='xl:text-md/[19px] text-sm xl:w-60 lg:w-60 md:w-40 sm:w-40 w-46 mt-5 pl-4 p-2 border-2 border-solid border-gray-300 rounded-lg'/>
        </form>
    </>)
}