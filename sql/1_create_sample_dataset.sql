-- Create table
create table sample_dataset (
  id serial primary key,
  name varchar not null,
  created_at timestamp not null
);

-- Add index on created_at (important for later examples)
create index idx_sample_dataset_created_at on sample_dataset(created_at);

-- Insert 1 million rows
insert into sample_dataset (name, created_at)
  select 
    md5(random()::text) as name,
    timestamp '2000-01-01 00:00:00' +
       random() * (timestamp '2025-01-01 00:00:00' -
                   timestamp '2000-01-01 00:00:00') as created_at
  from generate_series(1,1000000) i;

-- Verify
select *
 from sample_dataset
 limit 10;
 
select count(*)
from sample_dataset;
