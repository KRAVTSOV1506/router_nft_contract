/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { XERC20, XERC20Interface } from "../XERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "gatewayAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "feePayerAddress",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "_destGasLimit",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gatewayContract",
    outputs: [
      {
        internalType: "contract IGateway",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destGasLimit",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "destGasPrice",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "ackGasLimit",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "ackGasPrice",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "relayerFees",
        type: "uint128",
      },
      {
        internalType: "uint8",
        name: "ackType",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isReadCall",
        type: "bool",
      },
      {
        internalType: "string",
        name: "asmAddress",
        type: "string",
      },
    ],
    name: "getRequestMetadata",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestIdentifier",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "execFlag",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execData",
        type: "bytes",
      },
    ],
    name: "iAck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "requestSender",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "packet",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "srcChainId",
        type: "string",
      },
    ],
    name: "iReceive",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "ourContractOnChains",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "chainId",
        type: "string",
      },
      {
        internalType: "string",
        name: "contractAddress",
        type: "string",
      },
    ],
    name: "setContractOnChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "feePayerAddress",
        type: "string",
      },
    ],
    name: "setDappMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "gateway",
        type: "address",
      },
    ],
    name: "setGateway",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "destChainId",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "recipient",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "requestMetadata",
        type: "bytes",
      },
    ],
    name: "transferCrossChain",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200266b3803806200266b83398101604081905262000034916200037d565b8351849084906200004d906003906020850190620001fd565b50805162000063906004906020840190620001fd565b5050600680546001600160a01b03199081166001600160a01b038616179091556005805433921682179055620000a491506801158e460913d0000062000137565b60065460405163778ae5ed60e11b81526001600160a01b039091169063ef15cbda90620000d690849060040162000430565b602060405180830381600087803b158015620000f157600080fd5b505af115801562000106573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200012c919062000465565b5050505050620004e3565b6001600160a01b038216620001925760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b8060026000828254620001a691906200047f565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b8280546200020b90620004a6565b90600052602060002090601f0160209004810192826200022f57600085556200027a565b82601f106200024a57805160ff19168380011785556200027a565b828001600101855582156200027a579182015b828111156200027a5782518255916020019190600101906200025d565b50620002889291506200028c565b5090565b5b808211156200028857600081556001016200028d565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620002d6578181015183820152602001620002bc565b83811115620002e6576000848401525b50505050565b600082601f830112620002fe57600080fd5b81516001600160401b03808211156200031b576200031b620002a3565b604051601f8301601f19908116603f01168101908282118183101715620003465762000346620002a3565b816040528381528660208588010111156200036057600080fd5b62000373846020830160208901620002b9565b9695505050505050565b600080600080608085870312156200039457600080fd5b84516001600160401b0380821115620003ac57600080fd5b620003ba88838901620002ec565b95506020870151915080821115620003d157600080fd5b620003df88838901620002ec565b604088015190955091506001600160a01b0382168214620003ff57600080fd5b6060870151919350808211156200041557600080fd5b506200042487828801620002ec565b91505092959194509250565b602081526000825180602084015262000451816040850160208701620002b9565b601f01601f19169190910160400192915050565b6000602082840312156200047857600080fd5b5051919050565b60008219821115620004a157634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620004bb57607f821691505b60208210811415620004dd57634e487b7160e01b600052602260045260246000fd5b50919050565b61217880620004f36000396000f3fe6080604052600436106101805760003560e01c80636ef92622116100d6578063a457c2d71161007f578063dd62ed3e11610059578063dd62ed3e1461048c578063eb0cde1d146104df578063ef15cbda1461050c57600080fd5b8063a457c2d71461042c578063a4e212881461044c578063a9059cbb1461046c57600080fd5b806390646b4a116100b057806390646b4a146103a557806395d89b41146103c557806397dca755146103da57600080fd5b80636ef92622146102f057806370a08231146103105780638da5cb5b1461035357600080fd5b806323b872dd116101385780633950935111610112578063395093511461029d57806340c10f19146102bd5780634ce5d172146102dd57600080fd5b806323b872dd146102415780632ee25c1514610261578063313ce5671461028157600080fd5b80630d1ff3a5116101695780630d1ff3a5146101e057806318160ddd146102025780631aa6485a1461022157600080fd5b806306fdde0314610185578063095ea7b3146101b0575b600080fd5b34801561019157600080fd5b5061019a61052c565b6040516101a79190611826565b60405180910390f35b3480156101bc57600080fd5b506101d06101cb366004611869565b6105be565b60405190151581526020016101a7565b3480156101ec57600080fd5b506102006101fb3660046118dc565b6105d6565b005b34801561020e57600080fd5b506002545b6040519081526020016101a7565b34801561022d57600080fd5b5061019a61023c366004611948565b610691565b34801561024d57600080fd5b506101d061025c3660046119e2565b6107af565b34801561026d57600080fd5b5061019a61027c366004611b20565b6107d3565b34801561028d57600080fd5b50604051601281526020016101a7565b3480156102a957600080fd5b506101d06102b8366004611869565b610832565b3480156102c957600080fd5b506102006102d8366004611869565b61087e565b6102006102eb366004611bf1565b61090d565b3480156102fc57600080fd5b5061019a61030b366004611c95565b610bc5565b34801561031c57600080fd5b5061021361032b366004611cd2565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b34801561035f57600080fd5b506005546103809073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a7565b3480156103b157600080fd5b506102006103c0366004611cd2565b610c6a565b3480156103d157600080fd5b5061019a610d32565b3480156103e657600080fd5b506006546104139074010000000000000000000000000000000000000000900467ffffffffffffffff1681565b60405167ffffffffffffffff90911681526020016101a7565b34801561043857600080fd5b506101d0610447366004611869565b610d41565b34801561045857600080fd5b50610200610467366004611ced565b505050565b34801561047857600080fd5b506101d0610487366004611869565b610e12565b34801561049857600080fd5b506102136104a7366004611d44565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b3480156104eb57600080fd5b506006546103809073ffffffffffffffffffffffffffffffffffffffff1681565b34801561051857600080fd5b50610200610527366004611c95565b610e20565b60606003805461053b90611d77565b80601f016020809104026020016040519081016040528092919081815260200182805461056790611d77565b80156105b45780601f10610589576101008083540402835291602001916105b4565b820191906000526020600020905b81548152906001019060200180831161059757829003601f168201915b5050505050905090565b6000336105cc818585610f49565b5060019392505050565b60055473ffffffffffffffffffffffffffffffffffffffff16331461065c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e65720000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b818160078686604051610670929190611dcb565b90815260405190819003602001902061068a9290916116f9565b5050505050565b60065460609073ffffffffffffffffffffffffffffffffffffffff163314610715576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6f6e6c79206761746577617900000000000000000000000000000000000000006044820152606401610653565b8686604051610725929190611dcb565b60405180910390206007848460405161073f929190611dcb565b90815260405190819003602001812061075791611ddb565b60405180910390201461076957600080fd5b60008061077886880188611e6b565b9150915061079361078d836020015160601c90565b826110fc565b5050604080516020810190915260008152979650505050505050565b6000336107bd8582856111ef565b6107c88585856112c6565b506001949350505050565b6060600089898989898989896040516020016107f6989796959493929190611eb0565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529190529a9950505050505050505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906105cc9082908690610879908790611f85565b610f49565b60055473ffffffffffffffffffffffffffffffffffffffff1633146108ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610653565b61090982826110fc565b5050565b6040805160208101825260009052517fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4709060079061094e908a908a90611dcb565b90815260405190819003602001812061096691611ddb565b604051809103902014156109d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f636f6e7472616374206f6e2064657374206e6f742073657400000000000000006044820152606401610653565b33600090815260208190526040902054831115610a75576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f45524332303a20416d6f756e742063616e6e6f7420626520677265617465722060448201527f7468616e207468652062616c616e6365000000000000000000000000000000006064820152608401610653565b610a7f3384611535565b6000858585604051602001610a969392919061200d565b6040516020818303038152906040529050600060078989604051610abb929190611dcb565b908152602001604051809103902082604051602001610adb929190612031565b6040516020818303038152906040529050600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637bed470a3460016000604051806020016040528060008152508e8e8b8b8a6040518a63ffffffff1660e01b8152600401610b679897969594939291906120e8565b6020604051808303818588803b158015610b8057600080fd5b505af1158015610b94573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610bb99190612152565b50505050505050505050565b805160208183018101805160078252928201919093012091528054610be990611d77565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1590611d77565b8015610c625780601f10610c3757610100808354040283529160200191610c62565b820191906000526020600020905b815481529060010190602001808311610c4557829003601f168201915b505050505081565b60055473ffffffffffffffffffffffffffffffffffffffff163314610ceb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610653565b600680547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60606004805461053b90611d77565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610e05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610653565b6107c88286868403610f49565b6000336105cc8185856112c6565b60055473ffffffffffffffffffffffffffffffffffffffff163314610ea1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c79206f776e6572000000000000000000000000000000000000000000006044820152606401610653565b6006546040517fef15cbda00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063ef15cbda90610ef7908490600401611826565b602060405180830381600087803b158015610f1157600080fd5b505af1158015610f25573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109099190612152565b73ffffffffffffffffffffffffffffffffffffffff8316610feb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610653565b73ffffffffffffffffffffffffffffffffffffffff821661108e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610653565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8216611179576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610653565b806002600082825461118b9190611f85565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146112c057818110156112b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610653565b6112c08484848403610f49565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316611369576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610653565b73ffffffffffffffffffffffffffffffffffffffff821661140c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610653565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054818110156114c2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610653565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36112c0565b73ffffffffffffffffffffffffffffffffffffffff82166115d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610653565b73ffffffffffffffffffffffffffffffffffffffff82166000908152602081905260409020548181101561168e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610653565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b82805461170590611d77565b90600052602060002090601f016020900481019282611727576000855561178b565b82601f1061175e578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082351617855561178b565b8280016001018555821561178b579182015b8281111561178b578235825591602001919060010190611770565b5061179792915061179b565b5090565b5b80821115611797576000815560010161179c565b60005b838110156117cb5781810151838201526020016117b3565b838111156112c05750506000910152565b600081518084526117f48160208601602086016117b0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061183960208301846117dc565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461186457600080fd5b919050565b6000806040838503121561187c57600080fd5b61188583611840565b946020939093013593505050565b60008083601f8401126118a557600080fd5b50813567ffffffffffffffff8111156118bd57600080fd5b6020830191508360208285010111156118d557600080fd5b9250929050565b600080600080604085870312156118f257600080fd5b843567ffffffffffffffff8082111561190a57600080fd5b61191688838901611893565b9096509450602087013591508082111561192f57600080fd5b5061193c87828801611893565b95989497509550505050565b6000806000806000806060878903121561196157600080fd5b863567ffffffffffffffff8082111561197957600080fd5b6119858a838b01611893565b9098509650602089013591508082111561199e57600080fd5b6119aa8a838b01611893565b909650945060408901359150808211156119c357600080fd5b506119d089828a01611893565b979a9699509497509295939492505050565b6000806000606084860312156119f757600080fd5b611a0084611840565b9250611a0e60208501611840565b9150604084013590509250925092565b803567ffffffffffffffff8116811461186457600080fd5b8035801515811461186457600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112611a8657600080fd5b813567ffffffffffffffff80821115611aa157611aa1611a46565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611ae757611ae7611a46565b81604052838152866020858801011115611b0057600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600080610100898b031215611b3d57600080fd5b611b4689611a1e565b9750611b5460208a01611a1e565b9650611b6260408a01611a1e565b9550611b7060608a01611a1e565b945060808901356fffffffffffffffffffffffffffffffff81168114611b9557600080fd5b935060a089013560ff81168114611bab57600080fd5b9250611bb960c08a01611a36565b915060e089013567ffffffffffffffff811115611bd557600080fd5b611be18b828c01611a75565b9150509295985092959890939650565b60008060008060008060006080888a031215611c0c57600080fd5b873567ffffffffffffffff80821115611c2457600080fd5b611c308b838c01611893565b909950975060208a0135915080821115611c4957600080fd5b611c558b838c01611893565b909750955060408a0135945060608a0135915080821115611c7557600080fd5b50611c828a828b01611893565b989b979a50959850939692959293505050565b600060208284031215611ca757600080fd5b813567ffffffffffffffff811115611cbe57600080fd5b611cca84828501611a75565b949350505050565b600060208284031215611ce457600080fd5b61183982611840565b600080600060608486031215611d0257600080fd5b83359250611d1260208501611a36565b9150604084013567ffffffffffffffff811115611d2e57600080fd5b611d3a86828701611a75565b9150509250925092565b60008060408385031215611d5757600080fd5b611d6083611840565b9150611d6e60208401611840565b90509250929050565b600181811c90821680611d8b57607f821691505b60208210811415611dc5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8183823760009101908152919050565b6000808354611de981611d77565b60018281168015611e015760018114611e3057611e5f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00841687528287019450611e5f565b8760005260208060002060005b85811015611e565781548a820152908401908201611e3d565b50505082870194505b50929695505050505050565b60008060408385031215611e7e57600080fd5b823567ffffffffffffffff811115611e9557600080fd5b611ea185828601611a75565b95602094909401359450505050565b60007fffffffffffffffff000000000000000000000000000000000000000000000000808b60c01b168352808a60c01b166008840152808960c01b166010840152808860c01b166018840152507fffffffffffffffffffffffffffffffff000000000000000000000000000000008660801b1660208301527fff000000000000000000000000000000000000000000000000000000000000008560f81b16603083015283151560f81b60318301528251611f718160328501602087016117b0565b919091016032019998505050505050505050565b60008219821115611fbf577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b604081526000612021604083018587611fc4565b9050826020830152949350505050565b60408152600080845461204381611d77565b80604086015260606001808416600081146120655760018114612097576120c8565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516838901526080880195506120c8565b8960005260208060002060005b868110156120bf5781548b82018701529084019082016120a4565b8a018501975050505b505050505082810360208401526120df81856117dc565b95945050505050565b88815287602082015260c06040820152600061210760c08301896117dc565b828103606084015261211a81888a611fc4565b9050828103608084015261212f818688611fc4565b905082810360a084015261214381856117dc565b9b9a5050505050505050505050565b60006020828403121561216457600080fd5b505191905056fea164736f6c6343000809000a";

export class XERC20__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    gatewayAddress: string,
    feePayerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XERC20> {
    return super.deploy(
      _name,
      _symbol,
      gatewayAddress,
      feePayerAddress,
      overrides || {}
    ) as Promise<XERC20>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    gatewayAddress: string,
    feePayerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      gatewayAddress,
      feePayerAddress,
      overrides || {}
    );
  }
  attach(address: string): XERC20 {
    return super.attach(address) as XERC20;
  }
  connect(signer: Signer): XERC20__factory {
    return super.connect(signer) as XERC20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XERC20Interface {
    return new utils.Interface(_abi) as XERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): XERC20 {
    return new Contract(address, _abi, signerOrProvider) as XERC20;
  }
}