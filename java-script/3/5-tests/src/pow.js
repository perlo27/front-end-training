function pow(x,n){
	return x ** n;
}
if (typeof module !== 'undefined' && module.exports != null) {
    exports.pow = pow;
}
