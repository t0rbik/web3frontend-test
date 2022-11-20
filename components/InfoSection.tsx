import { useAccount, useEnsName, useNetwork } from "wagmi";

export const InfoSection = () => {
  const { address, connector, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { chain } = useNetwork();

  return (
    <div className='flex flex-col gap-4 pl-8 pr-8 items-center'>
      {!isConnected ? (
        <div className=''>Please, connect your wallet. Thank you :)</div>
      ) : (
        <>
          <h1 className='text-2xl font-semibold'>
            Connected! Here's some info on you:
          </h1>
          <div>
            Your address: {ensName ? `${ensName} (${address})` : address}
          </div>
          <div>
            You're connected to{" "}
            {connector ? connector.name : "Unknown connector"}
          </div>
          <div>And you're on {chain ? chain.name : "Can't get"} chain</div>
        </>
      )}
    </div>
  );
};
