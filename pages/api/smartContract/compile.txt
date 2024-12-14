import type { NextApiRequest, NextApiResponse } from 'next'
import {isEmpty} from "lodash";
var solc = require('solc');

export default function compile(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const smartContract = JSON.stringify(req.body);

    if(!isEmpty(smartContract)) {

        const output = JSON.parse(solc.compile(smartContract));

        let contractInfo:any = [];
        for (let contractName in output.contracts["test.sol"]) {

            contractInfo['abi'] = JSON.stringify(output.contracts['test.sol'][contractName].abi);
            contractInfo['bytecode'] = output.contracts['test.sol'][contractName].evm.bytecode.object;

        }

        return res.status(200).json({status: 'success', body:{"abi":contractInfo['abi'],"bytecode":contractInfo['bytecode']}})

    }

}