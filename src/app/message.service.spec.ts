import { MessageService } from "./message.service"

describe("MessageService", ()=> {
    let srv: MessageService;

    beforeEach(()=>{
        srv = new MessageService();
    })

    it("should have no messages to start", ()=>{
        expect(srv.messages.length).toBe(0);
    })

    it("should add a message when add is called", ()=> {
        srv.add('message1');
        expect(srv.messages.length).toBe(1);
    })

    it("should remove all messages when clear is called", ()=> {
        srv.add("message1");
        srv.add("message2");
        srv.clear();
        expect(srv.messages.length).toBe(0);
    })
})