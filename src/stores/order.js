import { reactive } from 'vue'
import { authStore } from './authStore'

const order = reactive({
    items: [],
    placeOrder(newOrder) {
        if (this.validate(newOrder) == true) {
            this.items.push(newOrder);
            this.saveOrderToStorage();
            //let orders = JSON.parse(localStorage.getItem('orders'));
            //orders.push(order);
            //localStorage.setItem('orders', JSON.stringify(orders));
            cart.emptyCart();
            toast.success('The Order is placed successfully !');
            router.push('/orders');
        }
        
    },
    validate(newOrder) {
        if ('' == newOrder.reciever.name1) {
            toast.error('Name cannot be empty !');
            return false
        }
        else if ('' == newOrder.reciever.address1) {
            toast.error('Address cannot be empty !');
            return false
        }
        else if ('' == newOrder.reciever.city) {
            toast.error('City has to valid')
            return false
        }
        else {
            return true;
        }

    },
    saveOrderToStorage() {
        localStorage.setItem('orders', JSON.stringify(this.items));
    },
    getOrderList() {
        this.items = JSON.parse(localStorage.getItem('orders')) || [];
    },
    removeOrder(i) {
        this.items.splice(i, 1);
        this.saveOrderToStorage();
    }
})

order.getOrderList();

export {order}