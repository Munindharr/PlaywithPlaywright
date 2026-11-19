import {Client} from '@modelcontextprotocol/sdk/client/index.js'
import type {Transport} from '@modelcontextprotocol/sdk/shared/transport.js'
export class MCPClient {
    private client!: Client

    async connect(transport: Transport){
        this.client = new Client({name: 'mcp-client', version: '1.0.0'});
        await this.client.connect(transport)
    }
    


}