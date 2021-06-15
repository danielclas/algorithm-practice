function repeatedString(s, n) {
    
    const count = [...s].filter(c => c == 'a').length;
    const mod = n % s.length;
    const total = count * Math.floor((n / s.length));
    
    if(mod === 0) return total;
    
    return total + ([...s].slice(0, mod).filter(c => c == 'a').length);
}