module.exports = {
    create: ( req, res, next) => {
        const dbInstance = req.app.get('db')
        const {name, description, price, image_url} = req.body

        dbInstance.create_product([name, description, price, image_url])
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: 'Oh no it stopped working'})
            console.log(err)
        })
    },
    
    getOne: ( req, res, next ) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.read_product(id)
        .then( product => res.status(200).send(product))
        .catch( err => {
            res.status(500).send({errorMessage: 'Darn something went wrong!'})
            console.log(err)
          })

    },
    
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_product()
        .then( products => res.status(200).send(products))
        .catch( err => {
            res.status(500).send({errorMessage: 'Something bad has happened.'})
            console.log(err)
        })
    },
    
    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db')
        const { params, query} = req

        dbInstance.update_product([params.id, query.desc])
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Error!'})
            console.log(err)
        })
    },
    
      delete: ( req, res, next ) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_product(id)
        .then( () => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Another error.'})
            console.log(err)
        })
    }

}