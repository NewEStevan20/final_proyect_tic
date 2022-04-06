interface ImportMetaEnv {
  readonly AIRTABLE_API_KEY: string;
  readonly AIRTABLE_DB_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
