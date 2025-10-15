/*
  # Update RSVP System to Save the Date Pre-Confirmations

  1. Changes to Tables
    - Modify `guests` table structure
      - Rename to focus on save the date functionality
      - Add `interested_in_attending` field (replaces will_attend)
      - Remove `dietary_restrictions` (too early for this info)
      - Add `needs_accommodation` (boolean)
      - Add `needs_transportation` (boolean)
      - Add `notes` (text, for additional guest notes)
      - Keep basic contact info and message fields

  2. Security
    - Maintain RLS policies
    - Public can submit pre-confirmations
    - Authenticated users can view all responses

  3. Important Notes
    - This is a Save the Date, not final RSVP
    - Focus on gauging interest and planning needs
    - More casual than final confirmation
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'guests' AND column_name = 'interested_in_attending'
  ) THEN
    ALTER TABLE guests ADD COLUMN interested_in_attending boolean DEFAULT true;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'guests' AND column_name = 'needs_accommodation'
  ) THEN
    ALTER TABLE guests ADD COLUMN needs_accommodation boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'guests' AND column_name = 'needs_transportation'
  ) THEN
    ALTER TABLE guests ADD COLUMN needs_transportation boolean DEFAULT false;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'guests' AND column_name = 'notes'
  ) THEN
    ALTER TABLE guests ADD COLUMN notes text DEFAULT '';
  END IF;
END $$;