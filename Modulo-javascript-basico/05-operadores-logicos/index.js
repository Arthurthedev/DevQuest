/* 
== ----- igual ---- a==b ---- verdadeiro se a for igual à b 
*/ 
const a = 3
const b = 3

//console.log(a==b)
/* 
=== ----- identico ---- c===d ---- verdadeiro se o tipo e valor de c e d forem identicos
*/ 
const c = 3
const d = "3"

//console.log(c===d)
/* 
!== ----- não identico ---- e===f ---- verdadeiro se os valores e tipos nao forem identicos
*/ 
const e = 3
const f = "3"

//console.log(e!==f)
/* 
!= ----- não igual ---- g!= ---- verdadeiro se os valores e tipos nao forem iguais
*/ 
const g = 3
const h = "3"

//console.log(g!=h)
/* 
< ----- menor que ---- i < j ---- verdadeiro se i for menor que j
*/ 
const i = 3
const j = "3"

//console.log(i<j)
/* 
<= ----- menor ou igual ---- k <= l ---- verdadeiro se k for menor ou igual a l
*/ 
const k = 3
const l = "3"

//console.log(k<=l)




/* 
&& ----- Verifica 2 condições e gera 1 resultado de um E outro  ---- m (condição) && n (condição) ---- 
*/ 
const m = 3
const n = 3

console.log(m===n && m>=n)
// VERDADEIRO + VERDADEIRO = VERDADEIRO
console.log(m==n && m>n)
// VERDADEIRO + FALSO = FALSO
console.log(m!=n && m==n)
// FALSO + VERDADEIRO = FALSO
console.log(m>n && m<n)
// FALSO + FALSO = FALSO 



/* 
|| ----- Verifica 2 condições e gera 1 resultado de um OU outro  ---- o (condição) || p (condição) ---- 
*/ 
const o = 3
const p = 3

console.log(o===p || o>=p)
// VERDADEIRO OU VERDADEIRO = VERDADEIRO 
console.log(o==p || o>p)
// VERDADEIRO OU FALSO = VERDADEIRO
console.log(o!=p || o==p)
// FALSO OU VERDADEIRO = VERDADEIRO 
console.log(o>p || o<p)
// FALSO OU FALSO = FALSO 

/* 
!() ----- inverte a operação  ---- console.log(!(operação)) ---- 
*/ 

const q = 2
const r = 2

console.log(q==r)//VERDADEIRA
console.log(!(q==r))//FALSO