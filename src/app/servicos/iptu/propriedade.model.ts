export class Boleto {
    codigo: string | undefined;
    pago: boolean | undefined;
    data: string | undefined;
    valor: string | undefined;
}

export class Propriedade {
    public codigo: string | undefined;
    public endereco: string | undefined;
    public valor: number | undefined;
    public boletos: Boleto[] | undefined;
}