import { UseCreateWalletResult } from "module/wallet/hook/useCreateWallet";

export const createMockedUseCreateWallet = (
    setPin?: jest.Mock<any, any>,
    setName?: jest.Mock<any, any>,
    setMnemonic?: jest.Mock<any, any>,
    setColorIndex?: jest.Mock<any, any>,
    reset?: jest.Mock<any, any>,
): UseCreateWalletResult => {
    return {
        state: { name: undefined, pin: undefined, mnemonic: undefined, colorIndex: undefined },
        setName: setName || jest.fn(),
        setPin: setPin || jest.fn(),
        setMnemonic: setMnemonic || jest.fn(),
        setColorIndex: setColorIndex || jest.fn(),
        reset: reset || jest.fn(),
    };
};
