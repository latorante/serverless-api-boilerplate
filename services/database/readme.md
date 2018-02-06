# Usage

# edit .sequelizerc for your paths
# then do "sequelize init"

# create a new model s
sequelize model:create --name "MODEL_NAME" --attributes "test:string"

# create db's - creates all
sequelize db:migrate

# create new migration changes
sequelize db:migrate --name="adding-column"

# run seeders
sequelize db:seed:all

## TSS ORDER
### group
### status
### category
### client_type
### score_card
### question
### call_category
### client
### user
### call
### client_user
### comment
### question_category
### response
### score_card_category
### score_card_question
