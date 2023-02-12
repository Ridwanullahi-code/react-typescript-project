type Form = {
    name: string;
    phoneNumber: string;
    email: string;
}

class Store{
    array: object[] = [];

    addData(data: Form) {
        this.array.push(data)
        localStorage.setItem("userInfo", JSON.stringify(this.array));
    }
    getData():object[] {
        return this.array;
    }
}

export default Store;