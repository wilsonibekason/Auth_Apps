// src/webauthn-client.d.ts
declare module '@webauthn/client' {
    // Define the types for createCredential and getAssertion functions.
    export function createCredential(): Promise<any>;
    export function getAssertion(publicKey: any): Promise<any>;
}
