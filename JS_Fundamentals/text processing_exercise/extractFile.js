function solve(str) {
    let fileInfo = str.split('\\').pop();

    fileInfo = fileInfo.split('.');

    let fileExtension = fileInfo.pop()
    let fileName = fileInfo.join('.')

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

solve('C:\\Projects\\Data-Structures\\LinkedList.cs');