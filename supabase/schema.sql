create extension if not exists pgcrypto;

create table if not exists commercial_projects (
  id uuid primary key default gen_random_uuid(),
  contact_email text not null,
  contact_name text,
  company_name text,
  contact_phone text,
  property_address text not null,
  property_type text,
  primary_need text,
  notes text,
  estimated_roof_sqft integer,
  roof_system text,
  status text not null default 'new',
  decision_maker_verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists roof_assets (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references commercial_projects(id) on delete set null,
  owner_user_id uuid references auth.users(id) on delete set null,
  property_address text not null,
  building_name text,
  roof_system text,
  roof_area_sqft integer,
  installation_year integer,
  manufacturer text,
  warranty_expiration date,
  condition_score integer check (condition_score between 0 and 100),
  created_at timestamptz not null default now()
);

create table if not exists contractor_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique references auth.users(id) on delete cascade,
  company_name text not null,
  roc_license text,
  service_areas text[] default '{}',
  roof_systems text[] default '{}',
  project_capacity_min numeric,
  project_capacity_max numeric,
  insurance_verified boolean not null default false,
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists project_invitations (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references commercial_projects(id) on delete cascade,
  contractor_id uuid not null references contractor_profiles(id) on delete cascade,
  status text not null default 'invited',
  invited_at timestamptz not null default now(),
  viewed_at timestamptz,
  unique(project_id, contractor_id)
);

create table if not exists proposals (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references commercial_projects(id) on delete cascade,
  contractor_id uuid not null references contractor_profiles(id) on delete cascade,
  total_price numeric not null,
  proposed_system text,
  manufacturer text,
  warranty_years integer,
  estimated_start_date date,
  estimated_duration_days integer,
  scope_summary text,
  exclusions text,
  alternate_option jsonb,
  status text not null default 'submitted',
  submitted_at timestamptz not null default now(),
  unique(project_id, contractor_id)
);

create table if not exists roof_events (
  id uuid primary key default gen_random_uuid(),
  roof_asset_id uuid not null references roof_assets(id) on delete cascade,
  event_type text not null,
  title text not null,
  details text,
  event_date date not null,
  document_urls text[] default '{}',
  created_at timestamptz not null default now()
);

alter table commercial_projects enable row level security;
alter table roof_assets enable row level security;
alter table contractor_profiles enable row level security;
alter table project_invitations enable row level security;
alter table proposals enable row level security;
alter table roof_events enable row level security;
