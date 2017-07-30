# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170730081506) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "photo_comments", force: :cascade do |t|
    t.text "body"
    t.bigint "user_id"
    t.bigint "photo_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["photo_id"], name: "index_photo_comments_on_photo_id"
    t.index ["user_id"], name: "index_photo_comments_on_user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "image"
    t.string "image_title"
    t.string "image_file_size"
    t.string "image_content_type"
    t.string "image_description"
    t.bigint "category_id"
    t.bigint "user_id"
    t.text "tags"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_photos_on_category_id"
    t.index ["user_id"], name: "index_photos_on_user_id"
  end

  create_table "post_comments", force: :cascade do |t|
    t.text "body"
    t.bigint "user_id"
    t.bigint "post_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_post_comments_on_post_id"
    t.index ["user_id"], name: "index_post_comments_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id"
    t.bigint "category_id"
    t.text "body"
    t.string "image"
    t.text "tags"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_posts_on_category_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_hash"
    t.string "password_salt"
    t.boolean "is_admin"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "photo_comments", "photos"
  add_foreign_key "photo_comments", "users"
  add_foreign_key "photos", "categories"
  add_foreign_key "photos", "users"
  add_foreign_key "post_comments", "posts"
  add_foreign_key "post_comments", "users"
  add_foreign_key "posts", "categories"
  add_foreign_key "posts", "users"
end
