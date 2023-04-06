class data {
    private id: string
    public name: string
    public text: string
    constructor(id: string, name: string, text: string){
        this.id = id
        this.name = name
        this.text = text
    }
}

class User extends data {
    private user_id: string
    public name: string
    protected email: string
    private password: string
    private dataReference: string

    constructor(id: string, Dataname:string, text:string, userId:string, name:string, email: string, password: string, dataReference: string){
        super(id, Dataname, text)
        this.user_id = userId
        this.name = name
        this.email = email
        this.password = password
        this.dataReference = dataReference
    }

    deleteData(e, id){

    }

    updateData(e, id){

    }

    getData(e, id){

    }

    async addData(e){
        e.preventDefault();

        let name = this.name
        let text = this.text

        const response = await fetch('http://localhost:8080/api/Tasks/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, text })
        });

        if (response.ok) {
            //acao
        } else {
            console.error('Failed to add task');
        }
    }
}