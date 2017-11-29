class CreateRecipes < ActiveRecord::Migration[5.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :preptime
      t.text :ingredients
      t.text :tools
      t.text :steps

      t.timestamps
    end
  end
end
