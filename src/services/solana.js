import { PublicKey, Connection, Transaction, SystemProgram, clusterApiUrl, LAMPORTS_PER_SOL } from '@solana/web3.js';

const vaultProgramId = new PublicKey('ASHdC8ShcNtPHQan1Uap6ydMxwwP65vjW4qxJr2hdDJd');
const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

export const depositToVault = async (publicKey, amount, sendTransaction) => {
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: vaultProgramId,
            lamports: amount * LAMPORTS_PER_SOL, // Assuming you use SOL
        })
    );

    const signature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature);
    return signature;
};
