
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://oiwlqwwecyupnlefqtx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pd2xxd3dlY3lldXBubGVmcXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMyNjg4NDYsImV4cCI6MjA4ODg0NDg0Nn0.2e6Gy6X7OqIZbhEUkLFcxVyDMXmiVGHK63JF0e6lTFw'
);

async function cleanData() {
  console.log('Cleaning all transactions...');
  const { data, error } = await supabase
    .from('transactions')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete everything

  if (error) {
    console.error('Error cleaning data:', error);
  } else {
    console.log('Success! Database cleared.');
  }
}

cleanData();
