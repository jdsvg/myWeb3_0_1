import React, { useEffect, useState } from 'react';

import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';
import { parseTransaction } from 'ethers/lib/utils';

export const TransactionContext = React.createContext();

const { ethereum } = window;


const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
    return transactionContract;
}

//Data's setter to transactions
export const TransactionProvider = ({ children }) => {
    const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: '' });

    // **
    const [currentAccount, setCurrentAccount] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const handleChange = (e, name) => {
        setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }
    // **



    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please Install MetaMask");
            const accounts = await ethereum.request({ method: 'eth_accounts' });
            if (accounts.length) {// If someone account exist
                setCurrentAccount(accounts[0])
                // getAllTransactions
            } else { console.log('No accounts found') }
        } catch (error) {
            console.error(error); throw new Error("No ethereum object")
        }
    }


    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please Install MetaMask");
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // Set a current account's metamask on the webpage context
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error(error); throw new Error("No ethereum object")
        }
    }


    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please Install MetaMask");
            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            // Convert the amount into ethers valid values
            const parseAmount = ethers.utils.parseEther(amount);
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: "0x5208",
                    value: parseAmount._hex
                }]
            });
            // Transaction ID
            const transactionHash = await transactionContract.addToBlockchain(addressTo, parseAmount, message, keyword);
            // The transactions takes a few seconds
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);
            //Get previous transaction count
            const transactionCount = await transactionContract.getTransactionCount();
            // Set current transaction count
            setTransactionCount(transactionCount.toNumber());
        } catch (error) {
            console.log(error);
        }
    }

    // **
    useEffect(() => {
        checkIfWalletIsConnected();
    }, [])
    // **

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}