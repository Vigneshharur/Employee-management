create table employee_main(
	employee_id INT primary key GENERATED ALWAYS AS IDENTITY,
   	first_name varchar(100) not null,
	middle_name varchar(100),
	last_name varchar(100)
);

create table hr_managers(
	employee_id int primary key,
	first_name varchar(100) not null,
	middle_name varchar(100),
	last_name varchar(100) not null,
	constraint hr_fk1 foreign key(employee_id) references employee_main(employee_id)
);

create table reporting_managers(
	employee_id int primary key, 
	first_name varchar(100) not null,
	middle_name varchar(100),
	last_name varchar(100) not null,
	constraint rm_fk foreign key(employee_id) references employee_main(employee_id)
);


Create table departments(
	dpt_id serial primary key,
	dpt_code char(2),
	dpt_name varchar(50) not null,
	total_employees int 
);



create table locations(
	location_id serial primary key,
	city varchar(200) null,
	state varchar(200) not null,
	country varchar(200) not null,
	zip_code varchar(6) not null check(zip_code ~ '^[0-9]*$')
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
	project_id serial primary key,
	client varchar(10) not null,
	project_title varchar(200) not null,
	no_of_employees int default 0
);


create table job_titles(
	job_id serial primary key,
	job_title varchar(100) not null,
	no_of_employees int default 0
);

create table employee_base(
	employee_id int PRIMARY key,
	first_name varchar(100) not null,
	middle_name varchar(100) not null,
	last_name varchar(100) not null not null,
	date_of_birth date not null,
	age int check(age>=21),
	gender char(1) check(gender in ('M','F')),
	marital_status boolean not null,
	father_name varchar(200) not null,
	mother_name varchar(200) not null,
	citizenship varchar(30) not null,
	blood_group varchar(5) not null,
	department_id int,
	employee_role int,
	project int,
	location_id int,
	status boolean not null,
	mobile_number varchar(10) not null check(mobile_number ~ '^[0-9]*$'),
	personal_email varchar(200) not null,
	company_email varchar(200) not null,
	aadhar_number varchar(15) not null check(aadhar_number ~ '^[0-9]*$'),
	pan_card varchar(10) not null check(aadhar_number ~ '^[A_Z0-9]*$'),
	total_experience float not null,
	joined_date date not null,
	added_by int,
	reporting_to int,
	emergency_contact varchar(10) not null check(mobile_number ~ '^[0-9]*$'),
	
	constraint empbase_fk1 foreign key(employee_id) references employee_main(employee_id),
	constraint empbase_fk2 foreign key(employee_role) references job_titles(job_id),
	constraint empbase_fk3 foreign key(location_id) references locations(location_id),
	constraint empbase_fk4 foreign key(project) references projects(project_id),
	constraint empbase_fk5 foreign key(added_by) references hr_managers(employee_id),
	constraint empbase_fk6 foreign key(reporting_to) references reporting_managers(employee_id),
	constraint empbase_fk7 foreign key(department_id) references departments(dpt_id)
		
);


