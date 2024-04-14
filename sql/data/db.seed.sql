-- Create Schema

create table if not exists products (
    id integer primary key autoincrement,
    name varchar(255) not null,
    price int not null,
    category varchar(255) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    deleted_at timestamp
);

create table if not exists stores (
    id integer primary key autoincrement,
    name varchar(255) not null,
    store_latitude float not null,
    store_longitude float not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    deleted_at timestamp
);

create table if not exists transactions (
    id integer primary key autoincrement,
    product_id int not null,
    store_id int not null,
    cashier_id int not null,
    quantity int not null,
    price float not null,
    transaction_date date not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    deleted_at timestamp
);

create table if not exists cashiers (
    id integer primary key autoincrement,
    name varchar(255) not null,
    created_at timestamp not null default current_timestamp,
    updated_at timestamp not null default current_timestamp,
    deleted_at timestamp
);

-- Let us seed the database with some data

-- Seed products

insert into products (name, price, category) values ('Cheese Cake', 100, 'Dairy');
insert into products (name, price, category) values ('Chocolate Cake', 200, 'Dessert');
insert into products (name, price, category) values ('Vanilla Cake', 150, 'Dessert');
insert into products (name, price, category) values ('Strawberry Cake', 250, 'Dessert');
insert into products (name, price, category) values ('Blueberries', 300, 'Fruit');
insert into products (name, price, category) values ('Bananas', 50, 'Fruit');
insert into products (name, price, category) values ('Apples', 100, 'Fruit');
insert into products (name, price, category) values ('Oranges', 150, 'Fruit');
insert into products (name, price, category) values ('Water', 200, 'Beverage');
insert into products (name, price, category) values ('Soda', 250, 'Beverage');
insert into products (name, price, category) values ('Juice', 300, 'Beverage');
insert into products (name, price, category) values ('Milk', 50, 'Dairy');
insert into products (name, price, category) values ('Yogurt', 100, 'Dairy');
insert into products (name, price, category) values ('Cheese', 150, 'Dairy');
insert into products (name, price, category) values ('Butter', 200, 'Dairy');

-- Seed stores

insert into stores (name, store_latitude, store_longitude) values ('Fresh Food', 1.0, 1.0);
insert into stores (name, store_latitude, store_longitude) values ('Grocery Store', 2.0, 2.0);
insert into stores (name, store_latitude, store_longitude) values ('Supermarket', 3.0, 3.0);
insert into stores (name, store_latitude, store_longitude) values ('Convenience Store', 4.0, 4.0);
insert into stores (name, store_latitude, store_longitude) values ('Mini Mart', 5.0, 5.0);

-- Seed cashiers

insert into cashiers (name) values ('Alice');
insert into cashiers (name) values ('Bob');
insert into cashiers (name) values ('Charlie');
insert into cashiers (name) values ('David');
insert into cashiers (name) values ('Eve');

-- Seed transactions

insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (1, 1, 1, 1, 100, '2021-01-01');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (2, 2, 2, 2, 400, '2021-01-02');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (3, 3, 3, 3, 450, '2021-01-03');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (4, 4, 4, 4, 1000, '2021-01-04');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (5, 5, 5, 5, 1500, '2021-01-05');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (6, 1, 2, 6, 300, '2021-01-06');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (7, 2, 3, 7, 700, '2021-01-07');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (8, 3, 4, 8, 1200, '2021-01-08');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (9, 4, 5, 9, 1350, '2021-01-09');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (10, 5, 1, 10, 2000, '2021-01-10');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (11, 1, 2, 11, 2750, '2021-01-11');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (12, 2, 3, 12, 3600, '2021-01-12');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (13, 3, 4, 13, 650, '2021-01-13');
insert into transactions (product_id, store_id, cashier_id, quantity, price, transaction_date) values (14, 4, 5, 14, 700, '2021-01-14');

-- Seed completed