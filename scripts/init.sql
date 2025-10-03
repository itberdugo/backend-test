-- Creation table document_type

drop table if exists document_type;
CREATE TABLE document_type(
    id INT PRIMARY KEY,
    code VARCHAR UNIQUE NOT NULL,
    name VARCHAR NOT NULL,
    is_active BOOLEAN DEFAULT true
);

-- insert in to table document_type -- parametric table
INSERT INTO document_type (id, code, name) VALUES
                            (1, 'CC', 'Cédula de ciudadania'),
                            (2, 'TI', 'Tarjeta de identidad'),
                            (3, 'CE', 'Cédula de extranjería'),
                            (4, 'TE', 'Tarjeta de extranjería'),
                            (5, 'NIT', 'Número de identificación tributaria'),
                            (6, 'PAS', 'Pasaporte'),
                            (7, 'PEP', 'Permiso especial de permanencia'),
                            (8, 'RC',  'Registro civil');


-- Creation table users
drop table if exists users;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    document_type_fk VARCHAR NOT NULL,
    document_number VARCHAR NOT null,
    phone VARCHAR UNIQUE,
    email VARCHAR UNIQUE NOT NULL,
    address VARCHAR NOT NULL,
    create_at TIMESTAMP DEFAULT NOW(),
    update_at TIMESTAMP DEFAULT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN  KEY (document_type_fk) REFERENCES document_type(code)
);


