const fs = require("fs");

function deleteFilesInDirExcept(dirPath, exceptList) {
    fs.readdir(dirPath, (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
            if (!exceptList.includes(file)) {
                fs.unlink(`${dirPath}/${file}`, (err) => {
                    if (err) throw err;
                    // eslint-disable-next-line no-console
                    console.log(`${file} was deleted`);
                });
            }
        });
    });
}

function deleteLinesExcept(file, words) {
    fs.readFile(file, "utf8", (err, data) => {
        if (err) throw err;
        const lines = data.split("\n");
        const filteredLines = lines.filter((line) => {
            return words.some((word) => line.includes(word));
        });
        const modifiedContent = filteredLines.join("\n");
        fs.writeFile(file, modifiedContent, (err) => {
            if (err) throw err;
            // eslint-disable-next-line no-console
            console.log(`${file} was updated`);
        });
    });
}

const file = "./src/module/api/service/index.ts";
const words = [
    "SignInRequestsService",
    "TransactionRequestService",
    "AccountMetadataDto",
    "CompleteTransactionRequestDto",
    "PartialDappDto",
    "SignedSignInRequest",
    "SignInRequestDto",
    "SignInRequestStatusDto",
    "SignTransactionRequest",
    "SimpleSignInRequestDto",
    "SimpleTransactionRequestDto",
    " TransactionDto ",
    "TransactionRequestStatusDto",
];

deleteLinesExcept(file, words);

const exceptServicesList = ["SignInRequestsService.ts", "TransactionRequestService.ts"];
const exceptModelsList = [
    "AccountMetadataDto.ts",
    "CompleteTransactionRequestDto.ts",
    "PartialDappDto.ts",
    "SignedSignInRequest.ts",
    "SignInRequestDto.ts",
    "SignInRequestStatusDto.ts",
    "SignTransactionRequest.ts",
    "SimpleSignInRequestDto.ts",
    "SimpleTransactionRequestDto.ts",
    "TransactionDto.ts",
    "TransactionRequestStatusDto.ts",
];

deleteFilesInDirExcept("./src/module/api/service/services", exceptServicesList);
deleteFilesInDirExcept("./src/module/api/service/models", exceptModelsList);

deleteLinesExcept(file, words);
