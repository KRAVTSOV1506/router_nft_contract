/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PingPongInterface extends ethers.utils.Interface {
  functions: {
    "ackFromDestination(uint64)": FunctionFragment;
    "currentRequestId()": FunctionFragment;
    "gatewayContract()": FunctionFragment;
    "getRequestMetadata(uint64,uint64,uint64,uint64,uint128,uint8,bool,string)": FunctionFragment;
    "iAck(uint256,bool,bytes)": FunctionFragment;
    "iPing(string,string,string,bytes)": FunctionFragment;
    "iReceive(string,bytes,string)": FunctionFragment;
    "owner()": FunctionFragment;
    "pingFromSource(string,uint64)": FunctionFragment;
    "setDappMetadata(string)": FunctionFragment;
    "setGateway(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ackFromDestination",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gatewayContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestMetadata",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "iAck",
    values: [BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "iPing",
    values: [string, string, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "iReceive",
    values: [string, BytesLike, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pingFromSource",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDappMetadata",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setGateway", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "ackFromDestination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gatewayContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRequestMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "iAck", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "iPing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "iReceive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pingFromSource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDappMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setGateway", data: BytesLike): Result;

  events: {
    "AckFromDestination(uint64,string)": EventFragment;
    "ExecutionStatus(uint256,bool)": EventFragment;
    "NewPing(uint64)": EventFragment;
    "PingFromSource(string,uint64,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AckFromDestination"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionStatus"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPing"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PingFromSource"): EventFragment;
}

export type AckFromDestinationEvent = TypedEvent<
  [BigNumber, string] & { requestId: BigNumber; ackMessage: string }
>;

export type ExecutionStatusEvent = TypedEvent<
  [BigNumber, boolean] & { eventIdentifier: BigNumber; isSuccess: boolean }
>;

export type NewPingEvent = TypedEvent<[BigNumber] & { requestId: BigNumber }>;

export type PingFromSourceEvent = TypedEvent<
  [string, BigNumber, string] & {
    srcChainId: string;
    requestId: BigNumber;
    message: string;
  }
>;

export class PingPong extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PingPongInterface;

  functions: {
    ackFromDestination(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    currentRequestId(overrides?: CallOverrides): Promise<[BigNumber]>;

    gatewayContract(overrides?: CallOverrides): Promise<[string]>;

    getRequestMetadata(
      destGasLimit: BigNumberish,
      destGasPrice: BigNumberish,
      ackGasLimit: BigNumberish,
      ackGasPrice: BigNumberish,
      relayerFees: BigNumberish,
      ackType: BigNumberish,
      isReadCall: boolean,
      asmAddress: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    iAck(
      requestIdentifier: BigNumberish,
      execFlag: boolean,
      execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    iPing(
      destChainId: string,
      destinationContractAddress: string,
      str: string,
      requestMetadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    iReceive(
      arg0: string,
      packet: BytesLike,
      srcChainId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pingFromSource(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setDappMetadata(
      feePayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGateway(
      gateway: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ackFromDestination(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  currentRequestId(overrides?: CallOverrides): Promise<BigNumber>;

  gatewayContract(overrides?: CallOverrides): Promise<string>;

  getRequestMetadata(
    destGasLimit: BigNumberish,
    destGasPrice: BigNumberish,
    ackGasLimit: BigNumberish,
    ackGasPrice: BigNumberish,
    relayerFees: BigNumberish,
    ackType: BigNumberish,
    isReadCall: boolean,
    asmAddress: string,
    overrides?: CallOverrides
  ): Promise<string>;

  iAck(
    requestIdentifier: BigNumberish,
    execFlag: boolean,
    execData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  iPing(
    destChainId: string,
    destinationContractAddress: string,
    str: string,
    requestMetadata: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  iReceive(
    arg0: string,
    packet: BytesLike,
    srcChainId: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pingFromSource(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setDappMetadata(
    feePayerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGateway(
    gateway: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ackFromDestination(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    currentRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    gatewayContract(overrides?: CallOverrides): Promise<string>;

    getRequestMetadata(
      destGasLimit: BigNumberish,
      destGasPrice: BigNumberish,
      ackGasLimit: BigNumberish,
      ackGasPrice: BigNumberish,
      relayerFees: BigNumberish,
      ackType: BigNumberish,
      isReadCall: boolean,
      asmAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    iAck(
      requestIdentifier: BigNumberish,
      execFlag: boolean,
      execData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    iPing(
      destChainId: string,
      destinationContractAddress: string,
      str: string,
      requestMetadata: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    iReceive(
      arg0: string,
      packet: BytesLike,
      srcChainId: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string]>;

    owner(overrides?: CallOverrides): Promise<string>;

    pingFromSource(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setDappMetadata(
      feePayerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setGateway(gateway: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AckFromDestination(uint64,string)"(
      requestId?: BigNumberish | null,
      ackMessage?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { requestId: BigNumber; ackMessage: string }
    >;

    AckFromDestination(
      requestId?: BigNumberish | null,
      ackMessage?: null
    ): TypedEventFilter<
      [BigNumber, string],
      { requestId: BigNumber; ackMessage: string }
    >;

    "ExecutionStatus(uint256,bool)"(
      eventIdentifier?: BigNumberish | null,
      isSuccess?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { eventIdentifier: BigNumber; isSuccess: boolean }
    >;

    ExecutionStatus(
      eventIdentifier?: BigNumberish | null,
      isSuccess?: null
    ): TypedEventFilter<
      [BigNumber, boolean],
      { eventIdentifier: BigNumber; isSuccess: boolean }
    >;

    "NewPing(uint64)"(
      requestId?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { requestId: BigNumber }>;

    NewPing(
      requestId?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { requestId: BigNumber }>;

    "PingFromSource(string,uint64,string)"(
      srcChainId?: string | null,
      requestId?: BigNumberish | null,
      message?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { srcChainId: string; requestId: BigNumber; message: string }
    >;

    PingFromSource(
      srcChainId?: string | null,
      requestId?: BigNumberish | null,
      message?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { srcChainId: string; requestId: BigNumber; message: string }
    >;
  };

  estimateGas: {
    ackFromDestination(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    gatewayContract(overrides?: CallOverrides): Promise<BigNumber>;

    getRequestMetadata(
      destGasLimit: BigNumberish,
      destGasPrice: BigNumberish,
      ackGasLimit: BigNumberish,
      ackGasPrice: BigNumberish,
      relayerFees: BigNumberish,
      ackType: BigNumberish,
      isReadCall: boolean,
      asmAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    iAck(
      requestIdentifier: BigNumberish,
      execFlag: boolean,
      execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    iPing(
      destChainId: string,
      destinationContractAddress: string,
      str: string,
      requestMetadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    iReceive(
      arg0: string,
      packet: BytesLike,
      srcChainId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pingFromSource(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDappMetadata(
      feePayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGateway(
      gateway: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ackFromDestination(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gatewayContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRequestMetadata(
      destGasLimit: BigNumberish,
      destGasPrice: BigNumberish,
      ackGasLimit: BigNumberish,
      ackGasPrice: BigNumberish,
      relayerFees: BigNumberish,
      ackType: BigNumberish,
      isReadCall: boolean,
      asmAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    iAck(
      requestIdentifier: BigNumberish,
      execFlag: boolean,
      execData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    iPing(
      destChainId: string,
      destinationContractAddress: string,
      str: string,
      requestMetadata: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    iReceive(
      arg0: string,
      packet: BytesLike,
      srcChainId: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pingFromSource(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDappMetadata(
      feePayerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGateway(
      gateway: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
