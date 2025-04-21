export const appPaths = {
    $path: '/',
    home: {
        $path: '/',
    },
    tripsCatalog: {
        $path: '/trips',
        trip: {
            $path: '/trips/:id'
        },
    },
    cart: {
        $path: '/cart',
        makeOrder: {
            $path: '/cart/makeOrder',
        }
    },
    login: {
        $path: '/login',
    },
    admin: {
        $path: '/admin',
    }
}