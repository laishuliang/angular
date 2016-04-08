export const $EOF = 0;
export const $TAB = 9;
export const $LF = 10;
export const $VTAB = 11;
export const $FF = 12;
export const $CR = 13;
export const $SPACE = 32;
export const $BANG = 33;
export const $DQ = 34;
export const $HASH = 35;
export const $$ = 36;
export const $PERCENT = 37;
export const $AMPERSAND = 38;
export const $SQ = 39;
export const $LPAREN = 40;
export const $RPAREN = 41;
export const $STAR = 42;
export const $PLUS = 43;
export const $COMMA = 44;
export const $MINUS = 45;
export const $PERIOD = 46;
export const $SLASH = 47;
export const $COLON = 58;
export const $SEMICOLON = 59;
export const $LT = 60;
export const $EQ = 61;
export const $GT = 62;
export const $QUESTION = 63;
export const $0 = 48;
export const $9 = 57;
export const $A = 65;
export const $E = 69;
export const $Z = 90;
export const $LBRACKET = 91;
export const $BACKSLASH = 92;
export const $RBRACKET = 93;
export const $CARET = 94;
export const $_ = 95;
export const $a = 97;
export const $e = 101;
export const $f = 102;
export const $n = 110;
export const $r = 114;
export const $t = 116;
export const $u = 117;
export const $v = 118;
export const $z = 122;
export const $LBRACE = 123;
export const $BAR = 124;
export const $RBRACE = 125;
export const $NBSP = 160;
export const $PIPE = 124;
export const $TILDA = 126;
export const $AT = 64;
export function isWhitespace(code) {
    return (code >= $TAB && code <= $SPACE) || (code == $NBSP);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLWZkdVN3clRzLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvY2hhcnMudHMiXSwibmFtZXMiOlsiaXNXaGl0ZXNwYWNlIl0sIm1hcHBpbmdzIjoiQUFBQSxhQUFhLElBQUksR0FBRyxDQUFDLENBQUM7QUFDdEIsYUFBYSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLGFBQWEsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixhQUFhLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDeEIsYUFBYSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGFBQWEsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixhQUFhLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsYUFBYSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLGFBQWEsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixhQUFhLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDeEIsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGFBQWEsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUMzQixhQUFhLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDN0IsYUFBYSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGFBQWEsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUMxQixhQUFhLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDMUIsYUFBYSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLGFBQWEsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN4QixhQUFhLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsYUFBYSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLGFBQWEsT0FBTyxHQUFHLEVBQUUsQ0FBQztBQUMxQixhQUFhLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsYUFBYSxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ3pCLGFBQWEsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUM3QixhQUFhLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDdEIsYUFBYSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLGFBQWEsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUN0QixhQUFhLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFFNUIsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUVyQixhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFDckIsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUVyQixhQUFhLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDNUIsYUFBYSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQzdCLGFBQWEsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM1QixhQUFhLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDekIsYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRXJCLGFBQWEsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNyQixhQUFhLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsYUFBYSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLGFBQWEsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixhQUFhLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsYUFBYSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLGFBQWEsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0QixhQUFhLEVBQUUsR0FBRyxHQUFHLENBQUM7QUFDdEIsYUFBYSxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBRXRCLGFBQWEsT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUMzQixhQUFhLElBQUksR0FBRyxHQUFHLENBQUM7QUFDeEIsYUFBYSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQzNCLGFBQWEsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUV6QixhQUFhLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDekIsYUFBYSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQzFCLGFBQWEsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUV0Qiw2QkFBNkIsSUFBWTtJQUN2Q0EsTUFBTUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsSUFBSUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsSUFBSUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7QUFDN0RBLENBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0ICRFT0YgPSAwO1xuZXhwb3J0IGNvbnN0ICRUQUIgPSA5O1xuZXhwb3J0IGNvbnN0ICRMRiA9IDEwO1xuZXhwb3J0IGNvbnN0ICRWVEFCID0gMTE7XG5leHBvcnQgY29uc3QgJEZGID0gMTI7XG5leHBvcnQgY29uc3QgJENSID0gMTM7XG5leHBvcnQgY29uc3QgJFNQQUNFID0gMzI7XG5leHBvcnQgY29uc3QgJEJBTkcgPSAzMztcbmV4cG9ydCBjb25zdCAkRFEgPSAzNDtcbmV4cG9ydCBjb25zdCAkSEFTSCA9IDM1O1xuZXhwb3J0IGNvbnN0ICQkID0gMzY7XG5leHBvcnQgY29uc3QgJFBFUkNFTlQgPSAzNztcbmV4cG9ydCBjb25zdCAkQU1QRVJTQU5EID0gMzg7XG5leHBvcnQgY29uc3QgJFNRID0gMzk7XG5leHBvcnQgY29uc3QgJExQQVJFTiA9IDQwO1xuZXhwb3J0IGNvbnN0ICRSUEFSRU4gPSA0MTtcbmV4cG9ydCBjb25zdCAkU1RBUiA9IDQyO1xuZXhwb3J0IGNvbnN0ICRQTFVTID0gNDM7XG5leHBvcnQgY29uc3QgJENPTU1BID0gNDQ7XG5leHBvcnQgY29uc3QgJE1JTlVTID0gNDU7XG5leHBvcnQgY29uc3QgJFBFUklPRCA9IDQ2O1xuZXhwb3J0IGNvbnN0ICRTTEFTSCA9IDQ3O1xuZXhwb3J0IGNvbnN0ICRDT0xPTiA9IDU4O1xuZXhwb3J0IGNvbnN0ICRTRU1JQ09MT04gPSA1OTtcbmV4cG9ydCBjb25zdCAkTFQgPSA2MDtcbmV4cG9ydCBjb25zdCAkRVEgPSA2MTtcbmV4cG9ydCBjb25zdCAkR1QgPSA2MjtcbmV4cG9ydCBjb25zdCAkUVVFU1RJT04gPSA2MztcblxuZXhwb3J0IGNvbnN0ICQwID0gNDg7XG5leHBvcnQgY29uc3QgJDkgPSA1NztcblxuZXhwb3J0IGNvbnN0ICRBID0gNjU7XG5leHBvcnQgY29uc3QgJEUgPSA2OTtcbmV4cG9ydCBjb25zdCAkWiA9IDkwO1xuXG5leHBvcnQgY29uc3QgJExCUkFDS0VUID0gOTE7XG5leHBvcnQgY29uc3QgJEJBQ0tTTEFTSCA9IDkyO1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0tFVCA9IDkzO1xuZXhwb3J0IGNvbnN0ICRDQVJFVCA9IDk0O1xuZXhwb3J0IGNvbnN0ICRfID0gOTU7XG5cbmV4cG9ydCBjb25zdCAkYSA9IDk3O1xuZXhwb3J0IGNvbnN0ICRlID0gMTAxO1xuZXhwb3J0IGNvbnN0ICRmID0gMTAyO1xuZXhwb3J0IGNvbnN0ICRuID0gMTEwO1xuZXhwb3J0IGNvbnN0ICRyID0gMTE0O1xuZXhwb3J0IGNvbnN0ICR0ID0gMTE2O1xuZXhwb3J0IGNvbnN0ICR1ID0gMTE3O1xuZXhwb3J0IGNvbnN0ICR2ID0gMTE4O1xuZXhwb3J0IGNvbnN0ICR6ID0gMTIyO1xuXG5leHBvcnQgY29uc3QgJExCUkFDRSA9IDEyMztcbmV4cG9ydCBjb25zdCAkQkFSID0gMTI0O1xuZXhwb3J0IGNvbnN0ICRSQlJBQ0UgPSAxMjU7XG5leHBvcnQgY29uc3QgJE5CU1AgPSAxNjA7XG5cbmV4cG9ydCBjb25zdCAkUElQRSA9IDEyNDtcbmV4cG9ydCBjb25zdCAkVElMREEgPSAxMjY7XG5leHBvcnQgY29uc3QgJEFUID0gNjQ7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1doaXRlc3BhY2UoY29kZTogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAoY29kZSA+PSAkVEFCICYmIGNvZGUgPD0gJFNQQUNFKSB8fCAoY29kZSA9PSAkTkJTUCk7XG59XG4iXX0=