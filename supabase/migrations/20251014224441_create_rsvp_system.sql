/*
  # Create RSVP System for Wedding Invitation

  1. New Tables
    - `guests`
      - `id` (uuid, primary key)
      - `name` (text, guest full name)
      - `email` (text, guest email)
      - `phone` (text, optional contact)
      - `will_attend` (boolean, attendance confirmation)
      - `number_of_guests` (integer, total guests including plus ones)
      - `dietary_restrictions` (text, optional dietary needs)
      - `message` (text, optional message to the couple)
      - `created_at` (timestamptz, submission timestamp)
      - `updated_at` (timestamptz, last update timestamp)

  2. Security
    - Enable RLS on `guests` table
    - Add policy for anyone to insert their RSVP (public access for submissions)
    - Add policy for authenticated users to view all RSVPs (for couple to manage)
    
  3. Important Notes
    - Public can submit RSVPs without authentication
    - Only authenticated users (the couple) can view all responses
    - Guests cannot view other guests' responses
*/

CREATE TABLE IF NOT EXISTS guests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  will_attend boolean NOT NULL,
  number_of_guests integer DEFAULT 1 CHECK (number_of_guests > 0),
  dietary_restrictions text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE guests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit RSVP"
  ON guests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all RSVPs"
  ON guests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_guests_email ON guests(email);
CREATE INDEX IF NOT EXISTS idx_guests_created_at ON guests(created_at DESC);