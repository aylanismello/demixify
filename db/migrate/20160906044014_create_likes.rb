class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.string :user_id
      t.string :mix_id

      t.timestamps
    end
    add_index :likes, :user_id, unique: true
    add_index :likes, :mix_id, unique: true
  end

end
