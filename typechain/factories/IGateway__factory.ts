/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGateway, IGatewayInterface } from "../IGateway";

const _abi = [
  {
    inputs: [],
    name: "crossChainRequestDefaultFee",
    outputs: [
      {
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentVersion",
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
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "routeAmount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "routeRecipient",
        type: "string",
      },
      {
        internalType: "string",
        name: "destChainId",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "requestMetadata",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "requestPacket",
        type: "bytes",
      },
    ],
    name: "iSend",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
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
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
];

export class IGateway__factory {
  static readonly abi = _abi;
  static createInterface(): IGatewayInterface {
    return new utils.Interface(_abi) as IGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGateway {
    return new Contract(address, _abi, signerOrProvider) as IGateway;
  }
}
