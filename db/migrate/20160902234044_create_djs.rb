class CreateDjs < ActiveRecord::Migration[5.0]
  def change
    create_table :djs do |t|
      t.integer :soundcloud_id
      t.string :name
      t.string :avatar_url
      t.string :location

      t.timestamps
    end
  end
end
