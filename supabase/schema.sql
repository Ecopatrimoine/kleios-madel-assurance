-- ============================================================
-- KLEIOS MADEL ASSURANCE — Schéma de base de données
-- À exécuter dans Supabase SQL Editor
-- ============================================================

-- ── Table : assurés ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS assures (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  numero_client   TEXT NOT NULL,
  nom             TEXT NOT NULL,
  prenom          TEXT NOT NULL,
  date_naissance  DATE,
  email           TEXT,
  telephone       TEXT,
  adresse         TEXT,
  code_postal     TEXT,
  ville           TEXT,
  payload         JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

-- ── Table : contrats ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS contrats (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  assure_id       UUID REFERENCES assures(id) ON DELETE CASCADE,
  numero_contrat  TEXT NOT NULL,
  type_contrat    TEXT NOT NULL,
  compagnie       TEXT NOT NULL DEFAULT 'Madel Assurance',
  date_effet      DATE NOT NULL,
  date_echeance   DATE NOT NULL,
  prime_annuelle  NUMERIC(10,2) DEFAULT 0,
  statut          TEXT DEFAULT 'actif',
  payload         JSONB DEFAULT '{}',
  created_at      TIMESTAMPTZ DEFAULT now(),
  updated_at      TIMESTAMPTZ DEFAULT now()
);

-- ── Table : sinistres ───────────────────────────────────────
CREATE TABLE IF NOT EXISTS sinistres (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  assure_id           UUID REFERENCES assures(id) ON DELETE CASCADE,
  contrat_id          UUID REFERENCES contrats(id) ON DELETE SET NULL,
  numero_sinistre     TEXT,
  type_sinistre       TEXT NOT NULL,
  date_sinistre       DATE NOT NULL,
  date_declaration    DATE DEFAULT CURRENT_DATE,
  description         TEXT,
  montant_estime      NUMERIC(10,2) DEFAULT 0,
  montant_indemnise   NUMERIC(10,2) DEFAULT 0,
  statut              TEXT DEFAULT 'declare',
  notes_gestionnaire  TEXT,
  created_at          TIMESTAMPTZ DEFAULT now(),
  updated_at          TIMESTAMPTZ DEFAULT now()
);

-- ── Table : cabinet_settings ────────────────────────────────
CREATE TABLE IF NOT EXISTS cabinet_settings (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  nom_cabinet         TEXT DEFAULT 'Madel Assurance',
  logo_url            TEXT,
  couleur_principale  TEXT DEFAULT '#D42B5A',
  adresse             TEXT,
  telephone           TEXT,
  email               TEXT,
  numero_orias        TEXT,
  created_at          TIMESTAMPTZ DEFAULT now()
);

-- ── RLS (Row Level Security) ─────────────────────────────────
ALTER TABLE assures         ENABLE ROW LEVEL SECURITY;
ALTER TABLE contrats        ENABLE ROW LEVEL SECURITY;
ALTER TABLE sinistres       ENABLE ROW LEVEL SECURITY;
ALTER TABLE cabinet_settings ENABLE ROW LEVEL SECURITY;

-- Policies : chaque agent ne voit que ses propres données
CREATE POLICY "assures_own" ON assures
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "contrats_own" ON contrats
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "sinistres_own" ON sinistres
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "cabinet_own" ON cabinet_settings
  FOR ALL USING (auth.uid() = user_id);

-- ── Trigger updated_at ───────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER assures_updated_at
  BEFORE UPDATE ON assures
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER contrats_updated_at
  BEFORE UPDATE ON contrats
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER sinistres_updated_at
  BEFORE UPDATE ON sinistres
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Indexes ──────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_assures_user_id    ON assures(user_id);
CREATE INDEX IF NOT EXISTS idx_contrats_assure_id ON contrats(assure_id);
CREATE INDEX IF NOT EXISTS idx_sinistres_assure_id ON sinistres(assure_id);
CREATE INDEX IF NOT EXISTS idx_contrats_statut    ON contrats(statut);
CREATE INDEX IF NOT EXISTS idx_sinistres_statut   ON sinistres(statut);

-- ── Données de démo BTS ──────────────────────────────────────
-- À exécuter APRÈS avoir créé votre compte agent
-- Remplacez 'VOTRE_USER_ID' par votre UUID depuis Auth > Users

-- Exemple (décommentez après avoir votre user_id) :
/*
INSERT INTO assures (user_id, numero_client, nom, prenom, date_naissance, email, telephone, adresse, code_postal, ville) VALUES
('VOTRE_USER_ID', 'MA-2024-0001', 'Dupont',   'Marie',   '1990-03-15', 'marie.dupont@email.fr',    '06 12 34 56 78', '12 rue des Lilas',       '75011', 'Paris'),
('VOTRE_USER_ID', 'MA-2024-0002', 'Martin',   'Thomas',  '1985-07-22', 'thomas.martin@email.fr',   '06 23 45 67 89', '45 avenue Victor Hugo',  '69003', 'Lyon'),
('VOTRE_USER_ID', 'MA-2024-0003', 'Bernard',  'Sophie',  '1998-11-08', 'sophie.bernard@email.fr',  '06 34 56 78 90', '8 impasse des Roses',    '13008', 'Marseille'),
('VOTRE_USER_ID', 'MA-2024-0004', 'Leroy',    'Pierre',  '1978-02-14', 'pierre.leroy@email.fr',    '06 45 67 89 01', '23 rue du Commerce',     '33000', 'Bordeaux'),
('VOTRE_USER_ID', 'MA-2024-0005', 'Moreau',   'Julie',   '1995-09-30', 'julie.moreau@email.fr',    '06 56 78 90 12', '67 bd Haussmann',        '75008', 'Paris'),
('VOTRE_USER_ID', 'MA-2024-0006', 'Simon',    'Luc',     '1972-05-18', 'luc.simon@email.fr',       '06 67 89 01 23', '3 chemin des Vignes',    '34000', 'Montpellier'),
('VOTRE_USER_ID', 'MA-2024-0007', 'Laurent',  'Emma',    '2000-01-25', 'emma.laurent@email.fr',    '06 78 90 12 34', '15 rue Nationale',       '59000', 'Lille'),
('VOTRE_USER_ID', 'MA-2024-0008', 'Michel',   'Antoine', '1988-12-03', 'antoine.michel@email.fr',  '06 89 01 23 45', '90 avenue de la Paix',   '67000', 'Strasbourg'),
('VOTRE_USER_ID', 'MA-2024-0009', 'Garcia',   'Camille', '1993-06-11', 'camille.garcia@email.fr',  '06 90 12 34 56', '5 place Bellecour',      '69002', 'Lyon'),
('VOTRE_USER_ID', 'MA-2024-0010', 'Thomas',   'Nicolas', '1982-04-27', 'nicolas.thomas@email.fr',  '06 01 23 45 67', '18 rue du Port',         '44000', 'Nantes'),
('VOTRE_USER_ID', 'MA-2024-0011', 'Robert',   'Lea',     '1997-08-19', 'lea.robert@email.fr',      '06 12 34 56 79', '42 boulevard Gambetta',  '06000', 'Nice'),
('VOTRE_USER_ID', 'MA-2024-0012', 'Richard',  'Marc',    '1969-10-05', 'marc.richard@email.fr',    '06 23 45 67 80', '7 rue Alsace-Lorraine',  '31000', 'Toulouse'),
('VOTRE_USER_ID', 'MA-2024-0013', 'Petit',    'Chloe',   '2001-03-12', 'chloe.petit@email.fr',     '06 34 56 78 91', '29 rue de la Mairie',    '35000', 'Rennes'),
('VOTRE_USER_ID', 'MA-2024-0014', 'Durand',   'Alexis',  '1991-07-08', 'alexis.durand@email.fr',   '06 45 67 89 02', '11 allée des Platanes',  '76000', 'Rouen'),
('VOTRE_USER_ID', 'MA-2024-0015', 'Lefevre',  'Manon',   '1999-11-22', 'manon.lefevre@email.fr',   '06 56 78 90 13', '55 rue Jean Jaurès',     '38000', 'Grenoble');
*/
