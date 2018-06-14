// Why 6.35.toFixed(1) == 6.3?

// Internal representation:
// alert( 6.35.toFixed(20) ); // 6.34999999999999964473
// alert( 1.35.toFixed(20) ); // 1.35000000000000008882

// So rounding differ when digit becomes >=5
