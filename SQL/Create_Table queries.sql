DROP DATABASE IF EXISTS employee_management;
create database employee_management;
use employee_management;
create table roles(
	role_id int AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(100) NOT NULL
);

create table employee_main(
	employee_id INT primary key AUTO_INCREMENT,
   	first_name varchar(100) not null,
	middle_name varchar(100),
	last_name varchar(100)
);

Create table departments(
	dpt_id int auto_increment primary key,
	dpt_code char(2),
	dpt_name varchar(50) not null
);

CREATE TABLE locations (
    location_id INT AUTO_INCREMENT PRIMARY KEY,
    address1 VARCHAR(200) NOT NULL,
    address2 VARCHAR(200),
    city VARCHAR(200) NOT NULL,
    state VARCHAR(200) NOT NULL,
    country VARCHAR(200) NOT NULL,
    zip_code VARCHAR(6) NOT NULL,
    CONSTRAINT check_zip_code CHECK (zip_code REGEXP '^[0-9]*$')
);

create table education_details(
	employee_id int,
	education_level varchar(10) check(education_level in ('CLASS-X','CLASS-XII','BCLR-CLG','OTHERS')),
	data_type varchar(25) check( data_type in ('INSTITUTE_NAME','PERCENTAGE','TOWN/CITY','STATE','OTHERS')),
	data_value varchar(200),
	constraint edu_pk primary key (employee_id,education_level,data_type),
	constraint edu_fk foreign key(employee_id) references employee_main(employee_id) 
);


create table projects(
	project_id int auto_increment primary key,
	project_title varchar(200) not null
);


create table job_titles(
	job_id int auto_increment primary key,
	job_title varchar(100) not null
);

create table employee_base(
	employee_id int PRIMARY key,
	first_name varchar(100) not null,
	middle_name varchar(100) not null,
	last_name varchar(100) not null not null,
	date_of_birth date not null,
	gender char(10) check(gender in ('Male','Female', 'Other')),
	marital_status boolean not null,
	father_name varchar(200) not null,
	mother_name varchar(200) not null,
	citizenship varchar(30) not null,
	blood_group varchar(5) not null,
	department_id int not null,
	employee_role int not null,
	project int not null,
	location_id int not null,
	status boolean not null,
	mobile_number varchar(10) not null check(mobile_number regexp '^[0-9]*$'),
	personal_email varchar(200) not null,
	company_email varchar(200) not null,
	aadhar_number varchar(15) not null check(aadhar_number regexp '^[0-9]*$'),
	pan_card varchar(10) not null check(pan_card regexp '^[A_Z0-9]*$'),
	previous_experience int not null,
	joined_date date not null,
    is_reporting_manager boolean not null default(false),
	added_by int,
	reporting_to int,
	emergency_contact varchar(10) not null check(emergency_contact regexp '^[0-9]*$'),
	
	constraint empbase_fk1 foreign key(employee_id) references employee_main(employee_id),
	constraint empbase_fk2 foreign key(employee_role) references job_titles(job_id),
	constraint empbase_fk3 foreign key(location_id) references locations(location_id),
	constraint empbase_fk4 foreign key(project) references projects(project_id),
	constraint empbase_fk7 foreign key(department_id) references departments(dpt_id)
);

create table users(
	user_id int primary key not null,
    username varchar(200) not null,
    password varchar(255) not null,
    
    constraint users_fk1 foreign key(user_id) references employee_base(employee_id)
);

create table user_roles(
	id int primary key auto_increment,
    user_id int not null,
    role_id int not null,
    
    constraint user_roles_fk1 foreign key(user_id) references users(user_id),
    constraint user_roles_fk2 foreign key(role_id) references roles(role_id),
    constraint user_roles_unique unique(user_id, role_id)
)