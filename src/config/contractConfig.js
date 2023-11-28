// Use Remix to deploy smart contract to local Ganache blockchain.
// Make note of the address the contract was deployed to, and paste it below...v

export const contractAddress = "0xC3dCeb2A853FBa8FE3412113CC9CF3a9f9fA8619";
export const bytcode =
  "608060405234801561001057600080fd5b5061099b806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630b70d051146100515780631662242f146100815780638d0695901461009d578063f49d6c21146100b9575b600080fd5b61006b6004803603810190610066919061068e565b6100d7565b6040516100789190610846565b60405180910390f35b61009b6004803603810190610096919061070f565b6102a9565b005b6100b760048036038101906100b291906106b7565b610400565b005b6100c161049c565b6040516100ce9190610868565b60405180910390f35b6100df6104e5565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110610157577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002090600302019050806040518060600160405290816000820154815260200160018201805461018d906108dc565b80601f01602080910402602001604051908101604052809291908181526020018280546101b9906108dc565b80156102065780601f106101db57610100808354040283529160200191610206565b820191906000526020600020905b8154815290600101906020018083116101e957829003601f168201915b5050505050815260200160028201805461021f906108dc565b80601f016020809104026020016040519081016040528092919081815260200182805461024b906108dc565b80156102985780601f1061026d57610100808354040283529160200191610298565b820191906000526020600020905b81548152906001019060200180831161027b57829003601f168201915b505050505081525050915050919050565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040528087815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050815260200184848080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505081525090806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000015560208201518160010190805190602001906103d9929190610506565b5060408201518160020190805190602001906103f6929190610506565b5050505050505050565b81816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208581548110610478577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000209060030201600201919061049692919061058c565b50505050565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905090565b60405180606001604052806000815260200160608152602001606081525090565b828054610512906108dc565b90600052602060002090601f016020900481019282610534576000855561057b565b82601f1061054d57805160ff191683800117855561057b565b8280016001018555821561057b579182015b8281111561057a57825182559160200191906001019061055f565b5b5090506105889190610612565b5090565b828054610598906108dc565b90600052602060002090601f0160209004810192826105ba5760008555610601565b82601f106105d357803560ff1916838001178555610601565b82800160010185558215610601579182015b828111156106005782358255916020019190600101906105e5565b5b50905061060e9190610612565b5090565b5b8082111561062b576000816000905550600101610613565b5090565b60008083601f84011261064157600080fd5b8235905067ffffffffffffffff81111561065a57600080fd5b60208301915083600182028301111561067257600080fd5b9250929050565b6000813590506106888161094e565b92915050565b6000602082840312156106a057600080fd5b60006106ae84828501610679565b91505092915050565b6000806000604084860312156106cc57600080fd5b60006106da86828701610679565b935050602084013567ffffffffffffffff8111156106f757600080fd5b6107038682870161062f565b92509250509250925092565b60008060008060006060868803121561072757600080fd5b600061073588828901610679565b955050602086013567ffffffffffffffff81111561075257600080fd5b61075e8882890161062f565b9450945050604086013567ffffffffffffffff81111561077d57600080fd5b6107898882890161062f565b92509250509295509295909350565b60006107a382610883565b6107ad818561088e565b93506107bd8185602086016108a9565b6107c68161093d565b840191505092915050565b60006060830160008301516107e96000860182610828565b50602083015184820360208601526108018282610798565b9150506040830151848203604086015261081b8282610798565b9150508091505092915050565b6108318161089f565b82525050565b6108408161089f565b82525050565b6000602082019050818103600083015261086081846107d1565b905092915050565b600060208201905061087d6000830184610837565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b60005b838110156108c75780820151818401526020810190506108ac565b838111156108d6576000848401525b50505050565b600060028204905060018216806108f457607f821691505b602082108114156109085761090761090e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6109578161089f565b811461096257600080fd5b5056fea26469706673582212206f96709a1fcb202c9886af4e3de96039e7175963034fb13af1a1bfa127a9aba664736f6c63430008000033";

export const contractABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bugId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_status",
        type: "string",
      },
    ],
    name: "addBug",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bugIndex",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_status",
        type: "string",
      },
    ],
    name: "updateBugStation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bugIndex",
        type: "uint256",
      },
    ],
    name: "getBug",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bugId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
        ],
        internalType: "struct BugTracker.Bug",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBugCount",
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
];
//  [
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_description",
//         type: "string",
//       },
//     ],
//     name: "addBug",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_bugIndex",
//         type: "uint256",
//       },
//       {
//         internalType: "bool",
//         name: "_status",
//         type: "bool",
//       },
//     ],
//     name: "updateBugStatus",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_bugIndex",
//         type: "uint256",
//       },
//     ],
//     name: "getBug",
//     outputs: [
//       {
//         components: [
//           {
//             internalType: "string",
//             name: "description",
//             type: "string",
//           },
//           {
//             internalType: "bool",
//             name: "isDone",
//             type: "bool",
//           },
//         ],
//         internalType: "struct BugTracker.Bug",
//         name: "",
//         type: "tuple",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "getBugCount",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];