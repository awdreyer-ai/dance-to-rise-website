import { sql } from "@vercel/postgres";

export { sql };

export async function initDb() {
  await sql`
    CREATE TABLE IF NOT EXISTS applications (
      id                       SERIAL PRIMARY KEY,
      reference_number         VARCHAR(20) UNIQUE NOT NULL,
      submitted_at             TIMESTAMPTZ DEFAULT NOW(),

      -- Dancer 1
      dancer1_full_name        TEXT NOT NULL,
      dancer1_dob              DATE NOT NULL,
      dancer1_gender           TEXT NOT NULL,
      dancer1_school           TEXT NOT NULL,
      dancer1_grade            TEXT NOT NULL,
      dancer1_area             TEXT NOT NULL,
      dancer1_guardian_name    TEXT NOT NULL,
      dancer1_guardian_phone   TEXT NOT NULL,
      dancer1_guardian_email   TEXT NOT NULL,

      -- Dancer 2
      dancer2_full_name        TEXT NOT NULL,
      dancer2_dob              DATE NOT NULL,
      dancer2_gender           TEXT NOT NULL,
      dancer2_school           TEXT NOT NULL,
      dancer2_grade            TEXT NOT NULL,
      dancer2_area             TEXT NOT NULL,
      dancer2_guardian_name    TEXT NOT NULL,
      dancer2_guardian_phone   TEXT NOT NULL,
      dancer2_guardian_email   TEXT NOT NULL,

      -- Dance info
      studio_name              TEXT NOT NULL,
      coach_name               TEXT NOT NULL,
      coach_phone              TEXT NOT NULL,
      coach_email              TEXT NOT NULL,
      danced_together          TEXT NOT NULL,
      styles_competed          TEXT[],
      competition_level        TEXT NOT NULL,
      competitions_last12      INTEGER DEFAULT 0,
      recent_results           TEXT,

      -- Financial
      why_applying             TEXT NOT NULL,
      cost_challenges          TEXT[],
      missed_competition       TEXT,
      missed_explanation       TEXT,

      -- Motivation
      motivation_letter        TEXT,
      motivation_file_url      TEXT,
      motivation_file_name     TEXT,

      -- Coach recommendation
      coach_recommendation     TEXT NOT NULL,
      coach_comments           TEXT NOT NULL,
      coach_confirmation       BOOLEAN DEFAULT FALSE,

      -- Declarations
      guardian_declaration     BOOLEAN DEFAULT FALSE,
      media_consent_website    BOOLEAN DEFAULT FALSE,
      media_consent_social     BOOLEAN DEFAULT FALSE,
      media_consent_fundraising BOOLEAN DEFAULT FALSE,
      media_consent_sponsor    BOOLEAN DEFAULT FALSE,
      media_consent_documentary BOOLEAN DEFAULT FALSE,
      popia_consent            BOOLEAN DEFAULT FALSE
    );
  `;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const arr = (v: string[]): any => v;

export async function insertApplication(data: ApplicationRow) {
  const result = await sql`
    INSERT INTO applications (
      reference_number,
      dancer1_full_name, dancer1_dob, dancer1_gender, dancer1_school, dancer1_grade, dancer1_area,
      dancer1_guardian_name, dancer1_guardian_phone, dancer1_guardian_email,
      dancer2_full_name, dancer2_dob, dancer2_gender, dancer2_school, dancer2_grade, dancer2_area,
      dancer2_guardian_name, dancer2_guardian_phone, dancer2_guardian_email,
      studio_name, coach_name, coach_phone, coach_email, danced_together,
      styles_competed, competition_level, competitions_last12, recent_results,
      why_applying, cost_challenges, missed_competition, missed_explanation,
      motivation_letter, motivation_file_url, motivation_file_name,
      coach_recommendation, coach_comments, coach_confirmation,
      guardian_declaration, media_consent_website, media_consent_social,
      media_consent_fundraising, media_consent_sponsor, media_consent_documentary,
      popia_consent
    ) VALUES (
      ${data.reference_number},
      ${data.dancer1_full_name}, ${data.dancer1_dob}, ${data.dancer1_gender},
      ${data.dancer1_school}, ${data.dancer1_grade}, ${data.dancer1_area},
      ${data.dancer1_guardian_name}, ${data.dancer1_guardian_phone}, ${data.dancer1_guardian_email},
      ${data.dancer2_full_name}, ${data.dancer2_dob}, ${data.dancer2_gender},
      ${data.dancer2_school}, ${data.dancer2_grade}, ${data.dancer2_area},
      ${data.dancer2_guardian_name}, ${data.dancer2_guardian_phone}, ${data.dancer2_guardian_email},
      ${data.studio_name}, ${data.coach_name}, ${data.coach_phone}, ${data.coach_email},
      ${data.danced_together}, ${arr(data.styles_competed)}, ${data.competition_level},
      ${data.competitions_last12}, ${data.recent_results ?? null},
      ${data.why_applying}, ${arr(data.cost_challenges)}, ${data.missed_competition ?? null},
      ${data.missed_explanation ?? null},
      ${data.motivation_letter ?? null}, ${data.motivation_file_url ?? null},
      ${data.motivation_file_name ?? null},
      ${data.coach_recommendation}, ${data.coach_comments}, ${data.coach_confirmation},
      ${data.guardian_declaration}, ${data.media_consent_website}, ${data.media_consent_social},
      ${data.media_consent_fundraising}, ${data.media_consent_sponsor},
      ${data.media_consent_documentary}, ${data.popia_consent}
    )
    RETURNING id;
  `;
  return result.rows[0];
}

export interface ApplicationSummary {
  id: number;
  reference_number: string;
  submitted_at: string;
  dancer1_full_name: string;
  dancer2_full_name: string;
}

export async function getAllApplications(): Promise<ApplicationSummary[]> {
  const result = await sql`
    SELECT id, reference_number, submitted_at,
           dancer1_full_name, dancer2_full_name
    FROM applications
    ORDER BY submitted_at DESC;
  `;
  return result.rows as ApplicationSummary[];
}

export async function getApplicationById(id: number) {
  const result = await sql`
    SELECT * FROM applications WHERE id = ${id};
  `;
  return result.rows[0] ?? null;
}

export async function deleteApplication(id: number) {
  await sql`DELETE FROM applications WHERE id = ${id};`;
}

export async function getAllApplicationsFull() {
  const result = await sql`SELECT * FROM applications ORDER BY submitted_at DESC;`;
  return result.rows;
}

export interface ApplicationRow {
  reference_number: string;
  dancer1_full_name: string;
  dancer1_dob: string;
  dancer1_gender: string;
  dancer1_school: string;
  dancer1_grade: string;
  dancer1_area: string;
  dancer1_guardian_name: string;
  dancer1_guardian_phone: string;
  dancer1_guardian_email: string;
  dancer2_full_name: string;
  dancer2_dob: string;
  dancer2_gender: string;
  dancer2_school: string;
  dancer2_grade: string;
  dancer2_area: string;
  dancer2_guardian_name: string;
  dancer2_guardian_phone: string;
  dancer2_guardian_email: string;
  studio_name: string;
  coach_name: string;
  coach_phone: string;
  coach_email: string;
  danced_together: string;
  styles_competed: string[];
  competition_level: string;
  competitions_last12: number;
  recent_results?: string;
  why_applying: string;
  cost_challenges: string[];
  missed_competition?: string;
  missed_explanation?: string;
  motivation_letter?: string;
  motivation_file_url?: string;
  motivation_file_name?: string;
  coach_recommendation: string;
  coach_comments: string;
  coach_confirmation: boolean;
  guardian_declaration: boolean;
  media_consent_website: boolean;
  media_consent_social: boolean;
  media_consent_fundraising: boolean;
  media_consent_sponsor: boolean;
  media_consent_documentary: boolean;
  popia_consent: boolean;
}
