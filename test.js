
const OPEN_BRACKETS = ['{', '[', '('];
const CLOSE_BRACKETS = ['}', ']', ')'];
const GROUP_BRACKETS = {
    '{': '}',
    '[': ']',
    '(': ')'
};

function buildBracketsHeap(text) {
    var openBracketStack = [];
    var closeBracketQueue = [];
    
    for (var i = 0; i < text.length; i++) {
        if (OPEN_BRACKETS.find(t => t === text[i])) {
            openBracketStack.push(text[i]);
        } else if (CLOSE_BRACKETS.find(t => t === text[i])) {
            closeBracketQueue.push(text[i]);
        }
    }

    return [
        openBracketStack,
        closeBracketQueue
    ];
}

function isBalancedBrackets(text) {
    var bracketsGroup = buildBracketsHeap(text);
    var openBracketStack = bracketsGroup[0];
    var closeBracketQueue = bracketsGroup[1];
    
    if (openBracketStack.length !== closeBracketQueue.length) {
        return false;
    }

    if (openBracketStack.length === 0) {
        return true;
    }

    do {
        cBracket = closeBracketQueue.shift();
        oBracket = openBracketStack.pop();
        
        if (GROUP_BRACKETS[oBracket] !== cBracket) {
            return false;
        }
    } while(openBracketStack.length > 0);

    return true;
}

const bracketsIn = [
    '{[()]}',
    '{[(])}',
    '{{[[(())]]}}'
];

bracketsIn.forEach(bracket => {
    console.log(isBalancedBrackets(bracket) ? 'SIM' : 'NÃO');
});